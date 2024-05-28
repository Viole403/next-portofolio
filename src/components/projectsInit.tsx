import Shuffle, { SortOptions } from 'shufflejs';

class Demo {
  private shuffle: Shuffle;

  constructor(element: HTMLElement) {
    this.shuffle = new Shuffle(element, {
      itemSelector: '.picture-item',
      sizer: element.querySelector('.my-sizer-element') as HTMLElement,
    });

    // Log events.
    this.addShuffleEventListeners();
    this.addFilterButtons();
    this.addSorting();
    this.addSearchFilter();
  }

  /**
   * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
   * for them like you normally would (with jQuery for example).
   */
  private addShuffleEventListeners(): void {
    this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
      console.log('layout. data:', data);
    });
    this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {
      console.log('removed. data:', data);
    });
  }

  private addFilterButtons(): void {
    const options = document.querySelector('.filter-options') as HTMLElement;
    if (!options) {
      return;
    }

    const filterButtons = Array.from(options.children) as HTMLButtonElement[];
    const onClick = this._handleFilterClick.bind(this);
    filterButtons.forEach((button) => {
      button.addEventListener('click', onClick, false);
    });
  }

  private _handleFilterClick(evt: MouseEvent): void {
    const btn = evt.currentTarget as HTMLButtonElement;
    const isActive = btn.classList.contains('active');
    const btnGroup = btn.getAttribute('data-group');

    this._removeActiveClassFromChildren(btn.parentNode as HTMLElement);

    let filterGroup: string;
    if (isActive) {
      btn.classList.remove('active');
      filterGroup = Shuffle.ALL_ITEMS;
    } else {
      btn.classList.add('active');
      filterGroup = btnGroup!;
    }

    this.shuffle.filter(filterGroup);
  }

  private _removeActiveClassFromChildren(parent: HTMLElement): void {
    const { children } = parent;
    for (let i = children.length - 1; i >= 0; i--) {
      children[i].classList.remove('active');
    }
  }

  private addSorting(): void {
    const buttonGroup = document.querySelector('.sort-options') as HTMLElement;
    if (!buttonGroup) {
      return;
    }
    buttonGroup.addEventListener('change', this._handleSortChange.bind(this));
  }

  private _handleSortChange(evt: Event): void {
    // Add and remove `active` class from buttons.
    const buttons = Array.from(
      (evt.currentTarget as HTMLElement).children,
    ) as HTMLButtonElement[];
    buttons.forEach((button) => {
      if (
        button.querySelector('input')?.value ===
        (evt.target as HTMLInputElement).value
      ) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });

    // Create the sort options to give to Shuffle.
    const { value } = evt.target as HTMLInputElement;
    let options: SortOptions = {};

    function sortByDate(element: HTMLElement): string {
      return element.getAttribute('data-created')!;
    }

    function sortByTitle(element: HTMLElement): string {
      return element.getAttribute('data-title')!.toLowerCase();
    }

    if (value === 'date-created') {
      options = {
        reverse: true,
        by: sortByDate,
      };
    } else if (value === 'title') {
      options = {
        by: sortByTitle,
      };
    }
    this.shuffle.sort(options);
  }

  // Advanced filtering
  private addSearchFilter(): void {
    const searchInput = document.querySelector(
      '.js-shuffle-search',
    ) as HTMLInputElement;
    if (!searchInput) {
      return;
    }
    searchInput.addEventListener('keyup', this._handleSearchKeyup.bind(this));
  }

  /**
   * Filter the shuffle instance by items with a title that matches the search input.
   * @param {Event} evt Event object.
   */
  private _handleSearchKeyup(evt: Event): void {
    const searchText = (evt.target as HTMLInputElement).value.toLowerCase();
    this.shuffle.filter((element, shuffle) => {
      // If there is a current filter applied, ignore elements that don't match it.
      if (shuffle.group !== Shuffle.ALL_ITEMS) {
        // Get the item's groups.
        const groups = JSON.parse(element.getAttribute('data-groups')!);
        const isElementInCurrentGroup = groups.indexOf(shuffle.group) !== -1;
        // Only search elements in the current group
        if (!isElementInCurrentGroup) {
          return false;
        }
      }
      const titleElement = element.querySelector(
        '.picture-item__title',
      ) as HTMLElement;
      const titleText = titleElement.textContent!.toLowerCase().trim();
      return titleText.indexOf(searchText) !== -1;
    });
  }
}

// document.addEventListener('DOMContentLoaded', () => {
//   (window as any).demo = new Demo(document.getElementById('grid')!);
// });

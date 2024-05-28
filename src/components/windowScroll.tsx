'use client';

import React, { useEffect } from 'react';

function windowScroll(): void {
  const navbar: HTMLElement | null = document.getElementById('navbar');
  if (navbar) {
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', (ev: Event): void => {
    ev.preventDefault();
    windowScroll();
  });
}

const WindowScroll = (): null => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      windowScroll();
    }
  }, []);
  return null;
};

export default WindowScroll;

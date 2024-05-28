import React, { FC } from 'react';
import * as IconFeather from 'react-feather';

interface LatestNews {
  id: number;
  image: string;
  title: string;
  date: string;
  creator: string;
}

const Footer: FC = () => {
  const latestNews: LatestNews[] = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Latest News 1',
      date: '2022-01-01',
      creator: 'John Doe',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      title: 'Latest News 2',
      date: '2022-01-02',
      creator: 'Jane Smith',
    },
  ];

  const latestNewsData = latestNews.map((news) => ({
    id: news.id,
    image: news.image,
    title: news.title,
    date: news.date,
    creator: news.creator,
  }));

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 border-e-dashed">
            <a href="layout-one-1.html">
              <img src="images/logo-sm.png" alt="" height={18} />
              <img src="images/logo-light.png" alt="" height={16} />
            </a>
            <p className="my-4">
              In an ideal world this text wouldn’t exist, a client would
              acknowledge the importance of having web copy before the design
              starts.
            </p>
            <ul className="list-unstyled footer-social mb-0 mt-sm-0 mt-3">
              <li className="list-inline-item">
                <a href="#">
                  {' '}
                  <IconFeather.Facebook className="icon-xs" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  {' '}
                  <IconFeather.Twitter className="icon-xs" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  {' '}
                  <IconFeather.GitHub className="icon-xs" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  {' '}
                  <IconFeather.Instagram className="icon-xs" />
                </a>
              </li>
            </ul>
          </div>
          {/* end col */}
          <div className="col-lg-6 offset-lg-1">
            <div className="row">
              <div className="col-md-4">
                <h6 className="text-footer mb-4 mt-sm-0 mt-5">Quick Links</h6>
                <ul className="list-unstyled footer-list">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                </ul>
              </div>
              {/* end col */}
              <div className="col-md-4">
                <h6 className="text-footer mb-4 mt-sm-0 mt-4">Latest News</h6>
                <ul className="list-unstyled footer-list">
                  {latestNewsData.map((news) => (
                    <li key={news.id}>
                      <a href="#">{news.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end col */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </footer>
  );
};

export default Footer;

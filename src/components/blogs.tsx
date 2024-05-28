'use client';
import Image from 'next/image';
import React, { FC, useState, useEffect } from 'react';

const Blogs: FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/blog') // Relative URL to your API route
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const truncateTitle = (title: string) => {
    const words = title.split(' ');
    let truncatedTitle = '';
    let wordCount = 0;

    for (let i = 0; i < words.length; i++) {
      if (wordCount + words[i].length <= 60) {
        truncatedTitle += words[i] + ' ';
        wordCount += words[i].length;
      } else {
        break;
      }
    }

    if (truncatedTitle.length > 0) {
      truncatedTitle = truncatedTitle.trim();
      if (truncatedTitle.length > 60) {
        const words = truncatedTitle.split(' ');
        truncatedTitle = words.slice(0, words.length - 1).join(' ');
      }
      if (truncatedTitle.endsWith('...')) {
        truncatedTitle = truncatedTitle.slice(0, -3);
      }
    }

    return truncatedTitle;
  };

  return (
    <>
      {/* our blogs */}
      <section className="section " id="blogs">
        <div className="container pb-5">
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">
                Blogs
              </span>
              <h2 className="fs-2 fw-normal lh-1 text-dark my-3">
                Latest news &amp; insights
              </h2>
              <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
                We craft digital, graphic and dimensional thinking, to create
                category leading brand experiences that have meaning .
              </p>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row align-items-center">
            {data.map((post: any) => {
              // Extract the thumbnail URL from the description
              const thumbnailRegex =
                /https:\/\/cdn-images-1.medium.com\/.*?\.(png|jpg|jpeg)/;
              const thumbnailMatch = post.description.match(thumbnailRegex);
              const thumbnailUrl = thumbnailMatch ? thumbnailMatch[0] : '';

              const truncatedTitle = truncateTitle(post.title);

              return (
                <div className="col-lg-4 col-md-6" key={post.guid}>
                  <div className="card shadow">
                    <Image
                      src={thumbnailUrl}
                      alt=""
                      className="img-fluid rounded-top"
                      width={800}
                      height={600}
                    />
                    <div className="card-body">
                      <a
                        href={post.link}
                        className="fs-20 my-0 d-block fw-medium"
                      >
                        {truncatedTitle}
                      </a>
                      <hr className="hr-dashed" />
                      <div className="d-flex justify-content-between">
                        <div className="meta-box">
                          <div className="media">
                            <Image
                              src={post.image}
                              alt=""
                              className="thumb-sm rounded-circle me-2 align-self-center"
                              width={800}
                              height={800}
                            />
                            <div className="media-body align-self-center text-truncate">
                              <h6 className="m-0 fs-14 text-dark">
                                {post.author}
                              </h6>
                              <p className="mb-0 fs-12 text-muted">
                                {post.pubDate}
                              </p>
                            </div>
                            {/*end media-body*/}
                          </div>
                        </div>
                        {/*end meta-box*/}
                        <div className="align-self-center">
                          <a href={post.link} className="fs-14">
                            Read more{' '}
                            <i className="ti ti-arrow-right align-self-center" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end card*/}
                </div>
              );
            })}
          </div>
          {/* end row */}
          <div className="row justify-content-center mt-5">
            <div className="col-12 text-center">
              <a href="/blog" className="btn btn-primary">
                See More
              </a>
            </div>
          </div>
        </div>
        {/* end container */}
      </section>
      {/*end projects*/}
    </>
  );
};

export default Blogs;

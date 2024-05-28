'use client';
import HeroBlog from '@components/hero/heroBlog';
import PositionRelativeHero from '@components/hero/positionRelativeHero';
import Image from 'next/image';
import React, { FC, useState, useEffect } from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaGitlab,
  FaInstagram,
  FaLinkedinIn,
  FaMediumM,
  FaTelegramPlane,
  FaTwitter,
} from 'react-icons/fa';

const Blog: FC = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [categories, setCategories] = useState([]);

  const truncateTitle = (title: string) => {
    const words = title.split(' ');
    let truncatedTitle = '';
    let wordCount = 0;

    for (let i = 0; i < words.length; i++) {
      if (wordCount + words[i].length <= 80) {
        truncatedTitle += words[i] + ' ';
        wordCount += words[i].length;
      } else {
        break;
      }
    }

    if (truncatedTitle.length > 0) {
      truncatedTitle = truncatedTitle.trim();
      if (truncatedTitle.length > 80) {
        const words = truncatedTitle.split(' ');
        truncatedTitle = words.slice(0, words.length - 1).join(' ');
      }
      if (truncatedTitle.endsWith('...')) {
        truncatedTitle = truncatedTitle.slice(0, -3);
      }
    }

    return truncatedTitle;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@masaliefmaulana'
        );
        if (response.status === 200) {
          const data = await response.json();
          // Get the image URL from the JSON response
          const imageUrl = data.feed.image;
          // Update the image URL for each post
          const updatedPosts = data.items.map((post: any) => ({
            ...post,
            image: imageUrl,
          }));
          setPosts(updatedPosts);

          // Get categories
          const categories = updatedPosts.reduce((acc: string[], post: any) => {
            if (post.categories && post.categories.length > 0) {
              acc.push(...post.categories.slice(0, 3));
            }
            return acc;
          }, []);
          setCategories(categories);
        } else {
          setError('Error fetching data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   // Fetch data from your API route
  //   fetch('/api/blog')
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  const socialMediaLinks = [
    {
      icon: <FaFacebookF />,
      url: 'https://www.facebook.com/Viole403',
    },
    {
      icon: <FaTwitter />,
      url: 'https://twitter.com/Viole403',
    },
    {
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/_aliefmaul',
    },
    {
      icon: <FaLinkedinIn />,
      url: 'https://www.linkedin.com/in/masalief-maulana',
    },
    {
      icon: <FaGithub />,
      url: 'https://www.github.com/Viole403',
    },
    {
      icon: <FaGitlab />,
      url: 'https://gitlab.com/Viole403',
    },
    {
      icon: <FaMediumM />,
      url: 'https://medium.com/@masalief',
    },
    {
      icon: <FaTelegramPlane />,
      url: 'https://t.me/Viole403',
    },
  ];

  return (
    <>
      <HeroBlog />
      <PositionRelativeHero />

      <section className="section">
        <div className="container">
          <div className="row">
            {/* Blog Start */}
            <div className="col-lg-8">
              <div className="row">
                {posts.map((post: any) => {
                  // Extract the thumbnail URL from the description
                  const thumbnailRegex =
                    /https:\/\/cdn-images-1.medium.com\/.*?\.(png|jpg|jpeg)/;
                  const thumbnailMatch = post.description.match(thumbnailRegex);
                  const thumbnailUrl = thumbnailMatch ? thumbnailMatch[0] : '';

                  const truncatedTitle = truncateTitle(post.title);

                  return (
                    <div className="col-lg-6" key={post.guid}>
                      <div className="card shadow mb-4">
                        <Image
                          src={thumbnailUrl}
                          alt=""
                          className="rounded-top post-thumbnail"
                          width={800}
                          height={600}
                        />
                        <div
                          className={
                            truncatedTitle.length <= 25
                              ? 'card-body-blog-minimum'
                              : 'card-body-blog'
                          }
                        >
                          <a
                            href={post.link}
                            className="fs-20 my-0 d-block fw-medium"
                          >
                            {truncatedTitle}
                          </a>
                          <hr className="hr-dashed" />
                          <div className="d-flex justify-content-between">
                            <div
                              className={`meta-box ${post.title.length <= 25 ? 'card-body-blog-metabox' : ''}`}
                            >
                              <div className="media">
                                <Image
                                  src={post.image}
                                  alt={post.title}
                                  width={800}
                                  height={600}
                                  className="thumb-sm rounded-circle me-2 align-self-center"
                                />
                                <div className="media-body align-self-center text-truncate">
                                  <h6 className="m-0 fs-14 text-dark">
                                    {post.author}
                                  </h6>
                                  <p className="mb-0 fs-12 text-muted">
                                    {post.pubDate}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              className={`align-self-center ${post.title.length <= 25 ? 'card-body-blog-metabox' : ''}`}
                            >
                              <a href="blog-detail.html" className="fs-14">
                                Read more{' '}
                                <i className="ti ti-arrow-right align-self-center"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Blog End */}
            {/* Sidebar Start */}
            <div className="col-lg-4">
              <div className="sidebar">
                {/* Sidebar content */}
                <div className="card shadow mb-4">
                  <div className="card-body-blog-sidebar">
                    <h5 className="card-title text-dark text-center">
                      Latest Posts
                    </h5>
                    {/* Add more list items for other latest posts */}
                  </div>
                </div>
                <div className="card shadow mb-4">
                  <div className="card-body-blog-sidebar">
                    <h5 className="card-title text-dark text-center">
                      Follow Me
                    </h5>
                    <ul className="list-inline social-icons follow-container">
                      {socialMediaLinks.map((socialMediaLink, index) => (
                        <li className="list-inline-item" key={index}>
                          <a href={socialMediaLink.url}>
                            {socialMediaLink.icon}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="card shadow mb-4">
                  <div className="card-body-blog-sidebar">
                    <h5 className="card-title text-dark text-center">
                      Categories
                    </h5>
                    <div className="categories-container">
                      {categories.map((category, index) => (
                        <a href="#" key={index}>
                          {category}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="card shadow mb-4">
                  <div className="card-body-blog-sidebar">
                    <h5 className="card-title">Box 5</h5>
                    {/* Add content for Box 3 */}
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

'use client';

import Image from 'next/image';
import React, { FC, useState } from 'react';

const Project: FC = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (group: string) => {
    setFilter(group);
  };

  const projects = [
    {
      title: 'Next Portfolio',
      image: 'images/logos/nextjs.svg',
      groups: ['bootstrap', 'react', 'nextjs', 'typescript'],
      link: 'htpps://masalief.my.id',
    },
    {
      title: 'Jobhunt',
      image: 'images/logos/nextjs.svg',
      groups: ['tailwind', 'react', 'nextjs', 'mongodb', 'typescript'],
      link: 'https://github.com/Viole403/jobunt-next',
    },
    {
      title: 'Govn Crowdfunding',
      image: 'images/logos/go.svg',
      groups: ['golang', 'gin', 'gorm', 'mysql', 'jwt'],
      link: 'https://github.com/Viole403/govn-crowdfunding',
    },
    {
      title: 'Jobhunt Sanbercode',
      image: 'images/logos/react.svg',
      groups: ['react', 'tailwind', 'firebase', 'REST API'],
      link: 'https://jobhun-react.netlify.app/',
    },
    {
      title: 'OSAP',
      image: 'images/logos/nodejs.svg',
      groups: ['nodejs', 'express', 'jest', 'jquery'],
      link: 'https://github.com/Viole403/osap',
    },
    {
      title: 'Mathup',
      image: 'images/logos/android.svg',
      groups: ['android', 'java', 'gradle', 'firebase'],
      link: 'https://github.com/Viole403/mathup',
    },
    {
      title: 'Cashflow',
      image: 'images/logos/php.svg',
      groups: ['php', 'mysql', 'bootstrap', 'jquery'],
      link: 'https://github.com/Viole403/cashflow',
    },
    {
      title: 'Azusa BOT',
      image: 'images/logos/nodejs.svg',
      groups: ['nodejs', 'open-wa', 'node-fetch', 'moment'],
      link: 'htpps://abcd-Example.com',
    },
  ];

  const group = {
    all: 'All',
    golang: 'Golang',
    nodejs: 'Node.js',
    react: 'React',
    nextjs: 'Next.js',
    android: 'Android',
    flutter: 'Flutter',
  };

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.groups.includes(filter));

  // const isBoxSizeEqual = (groups: string[]) => groups.length < 4;

  const limitedProjects = filteredProjects.slice(0, 5);

  return (
    <>
      <section className="section" id="projects">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">
                Work
              </span>
              <h2 className="fs-2 fw-medium lh-1 text-dark my-3">
                My Projects
              </h2>
              <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
                We craft digital, graphic and dimensional thinking, to create
                category leading brand experiences that have meaning .
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 filters-group-wrap mb-5">
              <div className="filters-group">
                <ul className="mb-0 list-unstyled filter-options filter-tab d-flex justify-content-center flex-wrap">
                  {Object.entries(group).map(([key, value]) => (
                    <li
                      key={key}
                      className={`list-inline-item position-relative text-dark ${filter === key ? 'active' : ''}`}
                      onClick={() => handleFilterChange(key)}
                    >
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row d-flex g-1 justify-content-center" id="grid">
            {limitedProjects.map((project, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 picture-item"
                data-groups={JSON.stringify(project.groups)}
              >
                <div className="card rounded shadow border-0 m-2">
                  <div className="card-body p-4 m-2">
                    <div className="media mb-3">
                      <div className="bg-soft-alt-dark d-flex justify-content-center align-items-center thumb-xl  rounded">
                        <Image
                          src={project.image}
                          alt=""
                          className="thumb-md"
                          height={600}
                          width={600}
                        />
                      </div>
                      <div className="media-body ms-3 align-self-center">
                        <h5 className="text-dark fs-18 fw-medium m-0">
                          {project.title}
                        </h5>
                        <p className="text-muted mb-0 fs-13">
                          {project.link}{' '}
                          <a href="">
                            <i className="ti ti-external-link fs-18 text-primary" />
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="mb-2">
                      {project.groups.map((group, index) => (
                        <span
                          key={index}
                          className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-12 text-uppercase me-2 mt-2"
                        >
                          {group}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-12 text-center">
              <a href="/project" className="btn btn-primary">
                See More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;

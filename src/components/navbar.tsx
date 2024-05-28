'use client';

import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logosm from '@images/logo-sm.png';
import logolight from '@images/logo-light.png';
// import logodark from '@images/logo-dark.png';
import { ChevronsRight, Menu } from 'react-feather';

const Navbar: FC = () => {
  // Sticky navbar state
  const [isSticky, setIsSticky] = useState(true);

  /**
   * Sets the sticky navbar state
   * on scroll
   */
  useEffect(() => {
    setIsSticky(typeof window !== 'undefined');
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top sticky mx-auto ${isSticky ? 'nav-sticky' : ''}`}
      id="navbar"
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          <Image
            src={logosm}
            alt=""
            height={26}
            width={26}
            className="logo-sm"
          />{' '}
          <Image src={logolight} alt="" className="logo-light" />
        </a>
        <a
          href="#"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggle-icon">
            <Menu />
          </span>
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto navbar-center mt-lg-0 mt-2">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#resume">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#contact">
                Contact
              </Link>
            </li>
          </ul>
          {/* <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" locale="en" className="nav-link">
                Switch to English
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" locale="id" className="nav-link">
                Switch to Indonesia
              </Link>
            </li>
          </ul> */}
          <div className="dropdown-center">
            <button
              className="btn btn-sm nav-btn text-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Language
            </button>
            <ul className="dropdown-menu dropdown-center dropdown-menu-lg-end card-bg">
              <li className="nav-item ms-2">
                <Link href="/" locale="en" className="nav-link text-dark">
                  English
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link href="/" locale="id" className="nav-link text-dark">
                  Indonesia
                </Link>
              </li>
            </ul>
          </div>
          <a
            href="#"
            className="btn btn-sm nav-btn text-primary mb-4 mb-lg-0 mx-auto"
          >
            Hire Me! <ChevronsRight className="icon-lg ms-1" />{' '}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

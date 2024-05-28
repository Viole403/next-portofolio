'use client';

import React from 'react';
import About from '@components/about';
import Blogs from '@components/blogs';
import Contact from '@components/contact';
import Hero from '@components/hero/hero';
import Offer from '@components/offer';
import Project from '@components/project';
import Resume from '@components/resume';
import Services from '@components/services';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Resume />
      <Offer />
      <Project />
      <Blogs />
      <Contact />
    </>
  );
}

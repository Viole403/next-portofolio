/* eslint-disable react/no-unescaped-entities */
import React, { FC } from 'react';
import Image from 'next/image';
import PositionRelativeHero from '@components/hero/positionRelativeHero';

const Hero: FC = () => {
  return (
    <>
      <section
        className="hero-one position-relative main-bg"
        id="home"
        style={{
          backgroundImage: 'url(images/personal/main-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5  mx-auto mt-5">
              <Image
                src="/images/personal/1.png"
                alt="Picture of Me"
                className="img-fluid ml-lg-5"
                width={500}
                height={500}
                priority={true}
              />
            </div>
            {/*end col*/}
            <div className="col-lg-7 text-center px-0 px-xl-4 mt-5 mt-lg-0 pt-5 pt-lg-0">
              <h5 className="d-inline-block py-1 px-3 rounded text-muted font-secondary">
                Hi, I'm Masalief Maulana
              </h5>
              <h1 className="hero-title mb-4 font-secondary fo">
                I'm a Student & <br />
                Web Developer
              </h1>
              <span className="wrap" />
              <div className="mb-5 mb-lg-0">
                <div className="d-inline-block">
                  <a href="#" className="btn btn-primary">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/* end container */}
      </section>
      <PositionRelativeHero />
    </>
  );
};

export default Hero;

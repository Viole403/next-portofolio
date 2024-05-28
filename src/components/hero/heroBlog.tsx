import React, { FC } from 'react';

const HeroBlog: FC = () => {
  return (
    <section
      className="hero-one position-relative bg-black"
      id="about"
      style={{
        backgroundImage: `url('images/personal/main-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center py-100">
          <div className="col-lg-7 py-5 text-center">
            <h5 className="head-title py-4" aria-label="Blogs" />
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
      {/* end container */}
    </section>
  );
};

export default HeroBlog;

import React, { FC } from 'react';

const ClientCarousel: FC = () => {
  return (
    <section className="section bg-gradient-light-white" id="review">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="card rounded shadow ">
              <div className="client-carousel">
                <div className="row align-items-center">
                  <div className="col-lg-10 p-5 mx-auto">
                    <div className="client-carousel">
                      <div
                        id="demo"
                        className="carousel carousel-dark slide"
                        data-bs-ride="carousel"
                        data-bs-wrap="true"
                      >
                        <div className="carousel-inner">
                          <div
                            className="carousel-item text-center active"
                            data-bs-interval={4000}
                          >
                            <img
                              src="images/logos/logo-1.svg"
                              alt=""
                              className="my-3"
                              height={70}
                            />
                            <p className="font-secondary fs-22 fst-italic mb-4 px-4">
                              I feel confident imposing change on myself. It's a
                              lot more fun progressing than looking back. That's
                              why scelerisque pretium dolor, sit amet vehicula
                              erat pelleque need throw curve balls.
                            </p>
                            <img
                              src="images/users/user-3.jpg"
                              alt=""
                              className="thumb-lg rounded-circle d-block mx-auto"
                            />
                            <span className="text-uppercase text-muted fs-14 fw-medium">
                              - John M. Sperry
                            </span>
                            <ul className="list-inline mb-0 align-self-center">
                              <li className="list-inline-item">
                                <i className="la la-star text-warning fs-16" />
                              </li>
                              <li className="list-inline-item">
                                <i className="la la-star text-warning fs-16 ms-n2" />
                              </li>
                              <li className="list-inline-item">
                                <i className="la la-star text-warning fs-16 ms-n2" />
                              </li>
                              <li className="list-inline-item">
                                <i className="la la-star text-warning fs-16 ms-n2" />
                              </li>
                              <li className="list-inline-item">
                                <i className="la la-star-half-o text-warning fs-16 ms-n2" />
                              </li>
                            </ul>
                          </div>
                          <div
                            className="carousel-item text-center"
                            data-bs-interval={4000}
                          >
                            <img
                              src="images/logos/logo-3.svg"
                              alt=""
                              className="my-3"
                              height={70}
                            />
                            <p className="font-secondary fs-22 fst-italic mb-4 px-4">
                              I feel confident imposing change on myself. It's a
                              lot more fun progressing than looking back. That's
                              why scelerisque pretium dolor, sit amet vehicula
                              erat pelleque need throw curve balls.
                            </p>
                            <img
                              src="images/users/user-5.jpg"
                              alt=""
                              className="thumb-lg rounded-circle d-block mx-auto"
                            />
                            <span className="text-uppercase text-muted fs-14 fw-medium">
                              - Larry J. Akins
                            </span>
                            <ul className="list-inline mb-0 align-self-center">
                              <li className="list-inline-item">
                                <i className="la la-star text-warning fs-16" />
                              </li>
                              <li className="list-inline-item">
                                <i className="la la-star text-warning fs-16 ms-n2" />
                              </li>
                              <li className="list-inline-item">
                                <i className="la la-star text-warning fs-16 ms-n2" />
                              </li>
                              <li className="list-inline-item">
                                <i className="la la-star text-warning fs-16 ms-n2" />
                              </li>
                              <li className="list-inline-item">
                                <i className="la la-star-half-o text-warning fs-16 ms-n2" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" />
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#demo"
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;

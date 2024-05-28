import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

const Resume: FC = () => {
  const translate = useTranslations('resume');

  const educationData = [
    'first_education',
    'second_education',
    'third_education',
  ] as const;

  const experienceData = ['first_experience'] as const;

  interface experienceData {
    title: string;
    duration: string;
    description: string;
    location: string;
    skills: string[];
  }

  return (
    <>
      {/* start resume */}
      <section className="section" id="resume">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">
                {translate('title')}
              </span>
              <h2 className="fs-2 fw-medium lh-1 text-dark my-3">
                {translate('title')}
              </h2>
              <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
                {translate('description')}
              </p>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row">
            <div className="col-12">
              <div className="row g-0">
                <div className="col-lg-4 col-md-6">
                  <div className="card rounded bg-light h-100 border-0">
                    <div className="card-body d-flex justify-content-center align-items-center">
                      <div className="mx-auto text-center">
                        <img
                          src="images/personal/school.png"
                          alt=""
                          className="vector-dark"
                          height={150}
                        />
                        <img
                          src="images/personal/school-light.png"
                          alt=""
                          className="vector-light"
                          height={150}
                        />
                        <h5 className="text-dark fs-22 fw-medium my-2">
                          {translate('education')}
                        </h5>
                      </div>
                    </div>
                    {/* end card-body */}
                  </div>
                  {/* end card */}
                </div>
                {/* end col */}
                <div className="col-lg-8 col-md-6">
                  <div className="card rounded bg-white  h-100 border-0">
                    <div className="card-body p-0">
                      <div
                        className="accordion accordion-flush"
                        id="Education_accordion"
                      >
                        {educationData.map((education, index) => (
                          <div className="accordion-item" key={index}>
                            <h2
                              className="accordion-header"
                              id={`education_${index}`}
                            >
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#Education_${index}`}
                                aria-expanded="false"
                              >
                                {translate(`${education}.title`)}
                                <span className="fw-medium text-primary ms-auto fs-14">
                                  {translate(`${education}.duration`)}
                                </span>
                              </button>
                            </h2>
                            <div
                              id={`Education_${index}`}
                              className={`accordion-collapse collapse ${
                                index === 0 ? 'show' : ''
                              }`}
                              aria-labelledby={`education_${index}`}
                              data-bs-parent="#Education_accordion"
                            >
                              <div className="accordion-body">
                                <p className="text-muted mb-3">
                                  {translate(`${education}.description`)}
                                </p>
                                <p className="fw-medium">
                                  {translate(`${education}.location`)}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                        {/*end accordion-item*/}
                      </div>
                      {/*end accordion*/}
                    </div>
                    {/* end card-body */}
                  </div>
                  {/* end card */}
                </div>
                {/* end col */}
              </div>
              {/* end row */}
              <hr className="hr-dashed" />
              <div className="row g-0">
                <div className="col-lg-4 col-md-6">
                  <div className="card rounded bg-light h-100 border-0">
                    <div className="card-body d-flex justify-content-center align-items-center">
                      <div className="mx-auto text-center">
                        <img
                          src="images/personal/job.png"
                          alt=""
                          className="vector-dark"
                          height={150}
                        />
                        <img
                          src="images/personal/job-light.png"
                          alt=""
                          className="vector-light"
                          height={150}
                        />
                        <h5 className="text-dark fs-22 fw-medium my-2">
                          {translate('experience')}
                        </h5>
                      </div>
                    </div>
                    {/* end card-body */}
                  </div>
                  {/* end card */}
                </div>
                {/* end col */}
                <div className="col-lg-8 col-md-6">
                  <div className="card rounded bg-white  h-100 border-0">
                    <div className="card-body p-0">
                      <div
                        className="accordion accordion-flush"
                        id="Experience_accordion"
                      >
                        {experienceData.map((experience, index) => (
                          <div className="accordion-item" key={index}>
                            <h2
                              className="accordion-header"
                              id={`heading${index}`}
                            >
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded="false"
                              >
                                {translate(`${experience}.title`)}
                                <span className="fw-medium text-primary ms-auto fs-14">
                                  {translate(`${experience}.duration`)}
                                </span>
                              </button>
                            </h2>
                            <div
                              id={`collapse${index}`}
                              className={`accordion-collapse collapse ${
                                index === 0 ? 'show' : ''
                              }`}
                              aria-labelledby={`heading${index}`}
                              data-bs-parent="#Experience_accordion"
                            >
                              <div className="accordion-body">
                                <p className="text-muted mb-1">
                                  {translate(`${experience}.description`)}
                                </p>
                                <p className="fw-medium">
                                  {translate(`${experience}.location`)}
                                </p>
                                {/* {experience.skills.map((skill, skillIndex) => (
                                  <span
                                    className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2 me-2"
                                    key={skillIndex}
                                  >
                                    {skill}
                                  </span>
                                ))} */}
                                <span className="badge badge-lg rounded bg-soft-alt-info fw-normal fs-13 text-uppercase mt-2 me-2">
                                  {/* {translate(`${experience}.skills_list`)} */}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                        {/*end accordion-item*/}
                      </div>
                      {/*end accordion*/}
                    </div>
                    {/* end card-body */}
                  </div>
                  {/* end card */}
                </div>
                {/* end col */}
              </div>
              {/*end row*/}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end resume */}
    </>
  );
};

export default Resume;

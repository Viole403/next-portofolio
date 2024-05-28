import React, { FC } from 'react';
import { useTranslations } from 'use-intl';

const About: FC = () => {
  const t = useTranslations('personal_info');
  return (
    <>
      {/* start about */}
      <section className="section" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 align-self-center">
              <h5 className="fs-24 text-dark fw-medium">
                <mark>{t('title')}</mark>
              </h5>
              <h4 className="fw-normal lh-base text-gray-700 mb-4 fs-20">
                {t('description')}
              </h4>
              <div className="social">
                <a href="https://github.com/Viole403">
                  <i className="lab la-github github me-1" />
                </a>
                <a href="https://twitter.com/Viole403">
                  <i className="lab la-twitter twitter me-1" />
                </a>
                <a href="https://faecbook.com/Viole403">
                  <i className="lab la-facebook facebook me-1" />
                </a>
                <a href="https://linkedin.com/in/masalief-maulana">
                  <i className="lab la-linkedin-in linkedin me-1" />
                </a>
                <a href="mailto:masaliem@gmail.com">
                  <i className="las la-envelope envelope me-1" />
                </a>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-5 ms-auto align-self-center">
              <div className="mb-5 mb-lg-0">
                <p className="mb-2">
                  <span className="personal-detail-title">
                    {t('spoken_languages')}
                  </span>
                  <span className="personal-detail-info">
                    Indonesia - English
                  </span>
                </p>
                <p className="mb-2">
                  <span className="personal-detail-title">
                    {t('nationality')}
                  </span>
                  <span className="personal-detail-info">Indonesia</span>
                </p>
                <p className="mb-2">
                  <span className="personal-detail-title">
                    {t('interests')}
                  </span>
                  <span className="personal-detail-info">
                    {t('interest_list')}
                  </span>
                </p>
              </div>
            </div>
            {/*end col*/}
            {/* End Col */}
          </div>
          {/*end row*/}
        </div>
        {/* end container */}
      </section>
      {/* end about */}
    </>
  );
};

export default About;

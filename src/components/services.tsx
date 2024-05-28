import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { CheckSquare, DollarSign, Layers } from 'react-feather';
// import * as IconFeather from 'react-feather';

const Services: FC = () => {
  const t = useTranslations('services');
  return (
    <section className="section bg-gradient-light-white" id="services">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-10 col-lg-7 text-center position-relative">
            <span className="badge badge-lg rounded bg-soft-alt-success fw-normal fs-13 text-uppercase">
              {t('title')}
            </span>
            <h2 className="fs-2 fw-medium lh-1 text-dark my-3 position-relative z-i-2">
              {t('our_services')}
            </h2>
            <div className="bg-text">
              <h1 className="fw-bold p-0">{t('title')}</h1>
            </div>
            <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 lh-lg">
              {t('description')}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="card rounded shadow border-0">
              <div className="card-body p-4 m-2">
                <div className="bg-soft-alt-orange d-flex justify-content-center align-items-center thumb-xl  rounded">
                  <Layers className="align-self-center svg-orange icon-md" />
                </div>
                <h5 className="text-dark fs-22 fw-medium my-4">
                  {t('first_service.title')}
                </h5>
                <p className="text-muted pb-4">
                  {t('first_service.description')}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="card rounded shadow  border-0">
              <div className="card-body p-4 m-2">
                <div className="bg-soft-alt-info d-flex justify-content-center align-items-center thumb-xl  rounded">
                  <DollarSign className="align-self-center svg-info icon-md" />
                </div>
                <h5 className="text-dark fs-22 fw-medium my-4">
                  {t('second_service.title')}
                </h5>
                <p className="text-muted pb-4">
                  {t('second_service.description')}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="card rounded shadow  border-0">
              <div className="card-body p-4 m-2">
                <div className="bg-soft-alt-success d-flex justify-content-center align-items-center thumb-xl  rounded">
                  <CheckSquare className="align-self-center svg-success icon-md" />
                </div>
                <h5 className="text-dark fs-22 fw-medium my-4">
                  {t('third_service.title')}
                </h5>
                <p className="text-muted pb-4">
                  {t('third_service.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

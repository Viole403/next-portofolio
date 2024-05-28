import { useTranslations } from 'next-intl';
import React, { FC } from 'react';

const Offer: FC = () => {
  const t = useTranslations('offer');
  return (
    <section className="section bg-light cta-pettern" id="cta">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="pattern-1 position-absolute">
              <img src="images/p-1.svg" alt="" className="" height={80} />
            </div>
            <h2
              className="text-dark"
              style={{ lineHeight: '1.5', position: 'relative' }}
            >
              {t('title')}
            </h2>
            <p className="text-muted mb-0">{t('description')}</p>
          </div>
          {/*end col*/}
          <div className="col-lg-6 ml-auto">
            <div className="cta-search">
              <form className="position-relative">
                <input type="email" placeholder="Email Address" />
                <button type="submit" className="btn btn-dark">
                  {t('sendMassage')}
                </button>
              </form>
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
      {/*end container*/}
    </section>
  );
};

export default Offer;

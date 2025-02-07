import React, { FC } from 'react';

const PositionRelativeHero: FC = () => {
  return (
    <div className="position-relative">
      <div className="shape overflow-hidden text-white">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default PositionRelativeHero;

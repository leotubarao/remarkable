import React from 'react';

export const Features: React.FC = () => (
  <div className="ltco_features">
    <div className="container">
      <ul className="ltco_features__list">
        <li className="ltco_quality_vehicles">
          <img src="/images/svgs/icon-checked-vehicles.svg" />
          Quality vehicles
        </li>
        <span className="divider"></span>
        <li className="ltco_revised_engines">
          <img src="/images/svgs/icon-revised-engines.svg" />
          Revised engines
        </li>
        <span className="divider this"></span>
        <li className="ltco_top_quality_service">
          <img src="/images/svgs/icon-top-quality-service.svg" />
          Top-quality service
        </li>
        <span className="divider"></span>
        <li className="ltco_checked_vehicles">
          <img src="/images/svgs/icon-quality-vehicles.svg" />
          Checked Vehicles
        </li>
      </ul>
    </div>
  </div>
);

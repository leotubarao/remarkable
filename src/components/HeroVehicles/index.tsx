import React from 'react';

import { ImageCover } from '../ImageCover';

export const HeroVehicles: React.FC = () => (
  <header className="ltco_header default container">
    <ImageCover src="/images/bg-vehicles.jpg" />

    <div className="ltco_title_header">
      <h1>FIND YOUR NEW CAR</h1>
    </div>
  </header>
);

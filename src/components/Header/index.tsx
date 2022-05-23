import React from 'react';

import { useRouter } from 'next/router';

import { HeroAboutUs } from '../HeroAboutUs';
import { HeroFinance } from '../HeroFinance';
import { HeroVehicles } from '../HeroVehicles';
import { Navbar } from '../Navbar';
import { SliderHome } from '../SliderHome';

export const Header: React.FC = () => {
  const { asPath } = useRouter();

  return (
    <>
      <Navbar />
      {asPath === '/' && <SliderHome />}
      {asPath === '/vehicles' && <HeroVehicles />}
      {asPath === '/about' && <HeroAboutUs />}
      {asPath === '/finance' && <HeroFinance />}
    </>
  );
};

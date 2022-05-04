import React from 'react';

import { NavFooter } from '~/components/NavFooter';

export const Footer: React.FC = () => {
  return (
    <footer className="ltco_footer">
      <div className="container py-5">
        <div className="ltco_footer__slogan">
          <p className="text-primary fs-1 fw-bolder mb-0 lh-1">
            Visit us today
          </p>
          <p className="text-white fs-4">
            And leave driving the car you have been looking for!
          </p>
        </div>

        <div className="divisor d-none d-xl-block"></div>

        <div className="ltco_footer__contact">
          <a href="mailto:lucas@remarkablecars.nz" className="text-white">
            lucas@remarkablecars.nz
          </a>
          <address>
            110 Coleridge Street, Sydenham
            <br />
            Christchurch
          </address>
        </div>

        <div className="divisor d-none d-sm-block"></div>

        <div className="ltco_footer__nav">
          <NavFooter />
        </div>
      </div>
    </footer>
  );
};

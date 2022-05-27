import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

import Head from 'next/head';

import { Features } from '~/components/Features';
import { ImageCover } from '~/components/ImageCover';
import { bodyClass, titleHead } from '~/utils';

const About: React.FC = () => {
  useEffect(() => {
    bodyClass(['about']);
  }, []);

  return (
    <>
      <Head>
        <title>{titleHead('About us')}</title>
      </Head>

      <div className="ltco_wrapper">
        <div className="ltco_wrapper__content">
          <h2 className="text-white fs-1 lh-1 fw-bolder text-uppercase">
            The place you were looking for
          </h2>

          <p>
            We have been working with car sales for over 5 years, the name
            Remarkable Cars is a tribute to the mountain we have in Queenstown
            called Remarkable, which makes a connection to the cars we sell, in
            terms of quality.
          </p>

          <p>
            With stores in Christchurch, Queenstown and Invercargil (near
            future), our working profile is to be available to customers 24/7,
            this ensures satisfied and loyal customers who end up building a
            relationship with the brand. We always focus on making the sale in a
            way that the buyer is happy, showing flexibility and versatility.
          </p>
        </div>

        <div className="ltco_wrapper__photo">
          <ImageCover src="/images/bg-section-about.jpg" />
        </div>
      </div>

      <div className="ltco_buttons bg-primary py-5">
        <Container>
          <a href="#" className="btn btn-outline-white btn-lg fw-bolder">
            Check our offers
          </a>

          <a href="#" className="btn btn-outline-white btn-lg fw-bolder">
            Financing
          </a>

          <a href="#" className="btn btn-outline-white btn-lg fw-bolder">
            Contact us
          </a>
        </Container>
      </div>

      <Features />
    </>
  );
};

export default About;

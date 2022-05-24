import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

import Head from 'next/head';

import { Features } from '~/components/Features';
import { bodyClass, titleHead } from '~/libs';

import { FormFinance } from '../../components/Forms/FormFinance';

const Finance: React.FC = () => {
  useEffect(() => {
    bodyClass(['finance']);
  }, []);

  return (
    <>
      <Head>
        <title>{titleHead('Apply For Finance')}</title>
      </Head>

      <Container className="py-5 fs-4">
        <p className="mb-0">
          Use the form below to apply for finance today. Once you have submitted
          your information we will review your application and approve your
          finance so you can drive away today.
        </p>
      </Container>
      <div className="bg-primary text-white">
        <Container className="py-5 fs-4">
          <p className="fs-3 fw-bold">Express Finance Application Form</p>

          <p>
            Don&apos;t have 20 minutes to fill out our full application form?
            This application form will take no more than 2 minutes to fill out.
            We will be in touch over the phone or by email to gather more
            information.
          </p>

          <p className="fs-3 fw-bold">1. Applicant Information</p>

          <FormFinance />
        </Container>
      </div>

      <Features />
    </>
  );
};

export default Finance;

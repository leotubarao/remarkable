import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import Link from 'next/link';

export const Brand: React.FC = () => {
  return (
    <Link href="/" passHref>
      <Navbar.Brand>
        <img src="/images/svgs/logo-remarkable.svg" alt="remarkable-logo" />
      </Navbar.Brand>
    </Link>
  );
};

import React from 'react';
import { Container } from 'react-bootstrap';

import { ImageCover } from '../ImageCover';

export const HeroFinance: React.FC = () => (
  <header className="ltco_header default ">
    <ImageCover src="/images/bg-about.jpg" />

    <Container className="ltco_title_header">
      <h1>APPLY FOR FINANCE</h1>
    </Container>
  </header>
);

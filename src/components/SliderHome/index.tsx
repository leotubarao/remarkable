import React from 'react';
import { Carousel } from 'react-bootstrap';

const PictureExample: React.FC = () => (
  <picture>
    <source
      media="(min-width: 1400px)"
      srcSet="https://via.placeholder.com/1920x500/27F707/FFF"
    />
    <source
      media="(min-width: 1200px)"
      srcSet="https://via.placeholder.com/1400x500/A8D923/FFF"
    />
    <source
      media="(min-width: 992px)"
      srcSet="https://via.placeholder.com/1200x500/405407/FFF"
    />
    <source
      media="(min-width: 768px)"
      srcSet="https://via.placeholder.com/992x500/0FBAB4/FFF"
    />
    <source
      media="(min-width: 576px)"
      srcSet="https://via.placeholder.com/768x400/74D4D0/FFF"
    />
    <img
      src="https://via.placeholder.com/576x300/A52CF5/FFF"
      className="d-block w-100"
      alt="car photo - remarkable cars"
    />
  </picture>
);

export const SliderHome: React.FC = () => {
  return (
    <header className="header ltco_carousel">
      <Carousel>
        <Carousel.Item>
          <PictureExample />
        </Carousel.Item>

        <Carousel.Item>
          <PictureExample />
        </Carousel.Item>
      </Carousel>
    </header>
  );
};

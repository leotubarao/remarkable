import React, { useCallback, useState } from 'react';
import { Carousel } from 'react-bootstrap';

interface SliderCarProps {
  images?: string[];
}

export const SliderCar: React.FC<SliderCarProps> = ({ images }) => {
  const [activeCarousel, setActiveCarousel] = useState(0);

  const handleSelect = useCallback((selectedIndex) => {
    setActiveCarousel(selectedIndex);
  }, []);

  return (
    <Carousel
      activeIndex={activeCarousel}
      onSelect={handleSelect}
      className="mb-3"
    >
      {images.map((image: string, index: number) => {
        if (!image) return;

        return (
          <Carousel.Item key={index}>
            <img
              src={image}
              className="d-block w-100"
              alt="car photo - remarkable cars"
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

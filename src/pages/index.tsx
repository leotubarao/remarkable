import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';

import { GetStaticProps } from 'next';

import { Button } from '~/components/Button';
import { CardCar } from '~/components/CardCar';
import { ImageCover } from '~/components/ImageCover';
import { bodyClass, loadVehicles } from '~/libs';
import { formatVehicles } from '~/libs/formatVehicle';
import { ICardCar } from '~/types';

interface HomeProps {
  vehicles: ICardCar[];
}

const Home: React.FC<HomeProps> = ({ vehicles }) => {
  useEffect(() => {
    bodyClass(['home']);
  }, []);

  return (
    <main className="ltco_main">
      <div className="ltco_chioces container mt-5">
        <div className="row">
          <div className="col-12 col-lg-6">
            <figure>
              <ImageCover src="/images/bg-section-01.jpg" />
              <figcaption>
                Experience, reliability, variety, meet Remarkable
              </figcaption>
            </figure>
            <p className="text-center">
              Our market experience and special financing conditions will make
              you sure that this is the right place.
            </p>
            <Button
              href="/vehicles"
              variant="primary"
              className="px-5 stretched-link"
            >
              About us
            </Button>
          </div>
          <div className="col-12 col-lg-6">
            <figure>
              <ImageCover src="/images/bg-section-02.jpg" />
              <figcaption>Financing</figcaption>
            </figure>
            <p className="text-center">
              Do you need financing? We are here to help you: No deposit
              starting from $19 per week!
            </p>
            <Button
              href="/vehicles"
              variant="primary"
              className="px-5 stretched-link"
            >
              Ask us
            </Button>
          </div>
        </div>
      </div>

      <div className="ltco_category container py-5">
        <h2 className="text-tertiary fs-1 text-center">Body style search</h2>

        <ul className="ltco_category__list">
          <li className="ltco_category__list__item">
            <img
              src="/images/hatchback.jpg"
              className="img-fluid"
              width="170"
              alt="hatchback cars"
            />
            <span>HATCHBACK</span>
          </li>
          <li className="ltco_category__list__item">
            <img
              src="/images/sedan.jpg"
              className="img-fluid"
              width="170"
              alt="sedan cars"
            />
            <span>SEDAN</span>
          </li>
          <li className="ltco_category__list__item">
            <img
              src="/images/station-wagon.jpg"
              className="img-fluid"
              width="170"
              alt="station wagon cars"
            />
            <span>STATION WAGON</span>
          </li>
          <li className="ltco_category__list__item">
            <img
              src="/images/suv.jpg"
              className="img-fluid"
              width="170"
              alt="suv / 4x4 cars"
            />
            <span>SUV / 4X4</span>
          </li>
          <li className="ltco_category__list__item">
            <img
              src="/images/van.jpg"
              className="img-fluid"
              width="170"
              alt="van cars"
            />
            <span>VAN</span>
          </li>
          <li className="ltco_category__list__item">
            <img
              src="/images/eletric.jpg"
              className="img-fluid"
              width="170"
              alt="hybrid/eletric cars"
            />
            <span>HYBRID/ELETRIC</span>
          </li>
        </ul>
      </div>

      <div className="ltco_cars_highlights">
        <div className="container py-5">
          <h2 className="text-tertiary fs-1 text-center fw-bolder">
            Best Offers
            <small className="text-dark fs-4 fw-normal d-block">
              Remarkable Cars with amazing prices
            </small>
          </h2>

          {vehicles.length !== 0 && (
            <Row className="ltco_card_cars align-items-stretch">
              {vehicles.map((vehicle) => (
                <CardCar key={vehicle.id} item={vehicle} />
              ))}
            </Row>
          )}
        </div>
      </div>

      <div className="ltco_cta_hero d-flex align-items-center">
        <ImageCover src="/images/bg-cta-hero.jpg" />

        <div className="container">
          <h2 className="fs-1">Vehicle Delivery</h2>
          <p>Discover our delivery system and receive your car at home.</p>
        </div>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await formatVehicles(await loadVehicles(true));

  return {
    props: {
      vehicles: data.slice(0, 4),
    },
    revalidate: 1000, // 1000 * 60 * 60 * process.env.REVALIDATE_VEHICLES,
  };
};

export default Home;

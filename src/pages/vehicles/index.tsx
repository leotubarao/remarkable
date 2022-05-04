import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

import { GetStaticProps } from 'next';
import Head from 'next/head';

import { CardCar } from '~/components/CardCar';
import { Features } from '~/components/Features';
import { bodyClass, loadVehicles, titleHead } from '~/libs';
import { ICardCar } from '~/types';

interface VehiclesProps {
  vehicles: ICardCar[];
}

const Vehicles: React.FC<VehiclesProps> = ({ vehicles }) => {
  useEffect(() => {
    bodyClass(['vehicles']);
  }, []);

  return (
    <>
      <Head>
        <title>{titleHead('Vehicles')}</title>
      </Head>

      <Features />

      <Container className="py-5 px-0">
        {vehicles.length !== 0 && (
          <Row className="ltco_card_cars align-items-stretch mx-0 mt-n5">
            {vehicles.map((vehicle) => (
              <CardCar key={vehicle.id} item={vehicle} />
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await loadVehicles();

  return {
    props: {
      vehicles: data,
    },
    revalidate: 1000, // 1000 * 60 * 60 * process.env.REVALIDATE_VEHICLES,
  };
};

export default Vehicles;

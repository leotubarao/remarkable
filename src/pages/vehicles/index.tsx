import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

import { GetStaticProps } from 'next';

import { CardCar } from '~/components/CardCar';
import { Features } from '~/components/Features';
import { Head } from '~/components/Head';
import { ICardCar } from '~/types';
import { bodyClass, formatVehicles, loadVehicles } from '~/utils';

interface VehiclesProps {
  vehicles: ICardCar[];
}

const Vehicles: React.FC<VehiclesProps> = ({ vehicles }) => {
  useEffect(() => {
    bodyClass(['vehicles']);
  }, []);

  return (
    <>
      <Head title="Vehicles" />

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
  const data = await formatVehicles(await loadVehicles(true));

  return {
    props: {
      vehicles: data,
    },
    revalidate: 1000, // 1000 * 60 * 60 * process.env.REVALIDATE_VEHICLES,
  };
};

export default Vehicles;

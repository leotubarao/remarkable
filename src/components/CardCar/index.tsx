import React from 'react';
import { Card, Col } from 'react-bootstrap';

import { ICardCar } from '~/types';

import { Button } from '../Button';
// import { SliderCar } from '../SliderCar';

interface CardCarProps {
  item: ICardCar;
  className?: string;
}

export const CardCar: React.FC<CardCarProps> = ({ item }) => {
  const title = `${item.ManuYear} ${item.Manufacturer} ${item.Model} ${item.Variant}`;

  return (
    <Col xs="12" sm="6" xl="3" className="d-flex mt-5">
      <Card className="card flex-grow-1">
        <Card.Img
          variant="top"
          src={item.images[1]}
          style={{
            height: '200px',
            objectFit: 'cover',
          }}
        />
        <div className="card-body">
          <h3 className="card-title fs-5">{title}</h3>
          <h4 className="card-text fs-3 text-primary fw-bolder">
            {`$${item.RetailPriceAmountInclDisplay}`}
          </h4>
          <p className="card-text fs-5">19,751km, Diesel, 1996cc</p>

          <div className="d-flex gap-2">
            <Button
              href={`/vehicles/${item.slug}`}
              variant="primary"
              className="flex-grow-1"
            >
              View car
            </Button>
          </div>
        </div>
      </Card>
    </Col>
  );
};

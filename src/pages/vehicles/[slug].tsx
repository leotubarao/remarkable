import React, { useCallback, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { ButtonBack } from '~/components/ButtonBack';
import { Features } from '~/components/Features';
import { SliderCar } from '~/components/SliderCar';
import { bodyClass, loadVehicles, titleHead } from '~/libs';
import { formatVehicle, formatVehicles } from '~/libs/formatVehicle';
import { ICardCar } from '~/types';

interface VehicleProps {
  vehicle: ICardCar;
}

const Vehicle: React.FC<VehicleProps> = ({ vehicle }) => {
  useEffect(() => {
    bodyClass(['vehicle']);
  }, []);

  const showRatingStars = useCallback((value: string) => {
    let stars = '★';
    const formattedRating = Math.floor(+value);

    for (let increment = 1; increment < formattedRating; increment++) {
      stars += `★`;
    }

    return stars;
  }, []);
  if (!vehicle) return null;

  return (
    <>
      <Head>
        <title>{titleHead(vehicle.title)}</title>
      </Head>

      <Container className="pb-5">
        <header className="row align-items-end border-bottom pb-3 mb-3">
          <div className="col-12 mb-3">
            <ButtonBack href="/vehicles">Back to Vehicles</ButtonBack>
          </div>

          <div className="col-12 col-lg-12">
            <h1 id="ltco_title_car" className="h2 mb-0">
              {vehicle.title}
            </h1>
            <p className="h2 text-secondary mb-0">
              {`$${vehicle.RetailPriceAmountInclDisplay}`}
            </p>
          </div>

          <div className="col-12 col-lg-4 d-flex justify-content-between justify-content-lg-end align-items-center gap-3 text-sm-end d-none">
            <p className="text-primary mb-0">Finance: $59.85/week</p>
            <a href="#financing" className="btn btn-primary px-sm-5">
              Financing
            </a>
          </div>
        </header>

        <section className="row mt-n5">
          <section className="col-12 col-lg-8 mt-5">
            <SliderCar images={vehicle.images} />

            {vehicle.AllFeatures.length && (
              <>
                <div className="ltco_feature_cars d-flex flex-wrap gap-2">
                  {vehicle.AllFeatures.map((item: string, index: number) => (
                    <span className="badge text-capitalize" key={index}>
                      {item}
                    </span>
                  ))}
                </div>
                <hr />
              </>
            )}

            <h2>Description</h2>

            <article>
              <p>{vehicle.Description}</p>
              <h3>FINANCE</h3>
              <p>{vehicle.FinanceFooterCaption}</p>
              <h3>WARRANTIES</h3>
              <p>
                If you’re looking for additional peace of mind to protect your
                new vehicle, we have Protecta Mechanical Warranties available
                from 12, 24 or 36 months.
              </p>
            </article>

            <h2>Feature Highlights</h2>

            {vehicle.StandardFeatures.length && (
              <ul className="ltco_feature_highlights">
                {vehicle.StandardFeatures.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </section>

          <aside className="col-12 col-lg-4 mt-5">
            <table className="ltco_table table table-light mb-5">
              <tbody>
                <tr>
                  <td>Engine</td>
                  <td className="text-end">
                    {`${vehicle.EngineHP}HP, ${vehicle.FuelType1}`}
                  </td>
                </tr>
                <tr>
                  <td>Body</td>
                  <td className="text-end">{vehicle.BodyStyle}</td>
                </tr>
                <tr>
                  <td>Odometer</td>
                  <td className="text-end">
                    {`${vehicle.OdoReading}${vehicle.OdoUnit}`}
                  </td>
                </tr>
                <tr>
                  <td>Ext Colour</td>
                  <td className="text-end">{vehicle.ExtColor1}</td>
                </tr>
                <tr>
                  <td>Interior</td>
                  <td className="text-end">{vehicle.SeatNo} Seats</td>
                </tr>
                <tr>
                  <td>Transmission</td>
                  <td className="text-end">{vehicle.Transmission}</td>
                </tr>
                <tr>
                  <td>NZ Owners</td>
                  <td className="text-end">-</td>
                </tr>
                <tr>
                  <td>Safety Rating</td>
                  <td className="text-end ltco_star" title="4 stars">
                    {showRatingStars(vehicle.FuelSaverRating[0])}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="ltco_seller bg-light">
              <h2 className=" h3 mb-0 p-3 px-4">View this vehicle at</h2>

              <div className="ratio ratio-16x9 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22761254.899476685!2d-18.97899073663884!3d38.5860352986399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347cbeb9e80f67b%3A0x9bbe6b6e25a97601!2s70044%20Polignano%20a%20Mare%2C%20Bari%2C%20It%C3%A1lia!5e0!3m2!1spt-BR!2sbr!4v1643441907469!5m2!1spt-BR!2sbr"
                  style={{ border: 0 }}
                />
              </div>

              <address className="px-3 text-center">
                110 Coleridge Street, Sydenham
                <br />
                Christchurch
              </address>

              <hr />

              <div className="ltco_seller__profile border-bottom text-center gap-3 d-flex flex-column flex-wrap align-items-center">
                <img
                  src="../images/person_lucas.jpg"
                  className="rounded-circle border border-dark"
                  width="100"
                  alt="person"
                />
                <p>
                  Lucas Lopes
                  <br />
                  021 236 574 8<br />
                  lucas@remarkablecars.nz
                </p>
              </div>
            </div>
          </aside>
        </section>
      </Container>

      <Features />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await formatVehicles(await loadVehicles(true));

  const paths = data.map((vehicle: ICardCar) => {
    return {
      params: {
        slug: vehicle.slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  const data = await formatVehicle(
    await loadVehicles(true),
    typeof slug === 'string' ? slug : slug.length && slug[0],
  );

  return {
    props: {
      vehicle: data,
    },
    revalidate: 1000, // 1000 * 60 * 60 * process.env.REVALIDATE_VEHICLES,
  };
};

export default Vehicle;

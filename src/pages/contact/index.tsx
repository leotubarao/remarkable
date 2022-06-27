import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { Features } from '~/components/Features';
import { Head } from '~/components/Head';
import { bodyClass } from '~/utils';

import { FormContact } from '../../components/Forms/FormContact';

const Contact: React.FC = () => {
  useEffect(() => {
    bodyClass(['contact']);
  }, []);

  return (
    <>
      <Head title="Contact" />

      <div className="bg-light">
        <Container className="py-5 fs-4">
          <p className="fs-5 fw-bold">
            Leave us a message, we will get back to you very soon.
          </p>

          <Row>
            <Col xs="12" lg="6">
              <FormContact />
            </Col>

            <Col xs="12" lg="6">
              <div className="ratio ratio-16x9 my-4">
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
            </Col>
          </Row>
        </Container>
      </div>

      <Features />
    </>
  );
};

export default Contact;

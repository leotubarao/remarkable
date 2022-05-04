import React from 'react';
import { Container, Navbar as NavbarRB, Nav, Button } from 'react-bootstrap';

import { NavLink } from '~/components/NavLink';
import { menuHeader } from '~/data/nav';

import { Brand } from './Brand';

export const Navbar: React.FC = () => {
  return (
    <NavbarRB bg="light" expand="lg">
      <Container>
        <Brand />

        <NavbarRB.Toggle aria-controls="navbarHeader" />

        <NavbarRB.Collapse id="navbarHeader">
          <Nav className="ms-auto">
            {menuHeader.length &&
              menuHeader.map((item) => (
                <NavLink key={item.id} href={item.href}>
                  {item.value}
                </NavLink>
              ))}
          </Nav>

          <Button href="tel:+640212365748" className="ltco_phone_cta">
            phone: <strong>02199997878</strong>
          </Button>
        </NavbarRB.Collapse>
      </Container>
    </NavbarRB>
  );
};

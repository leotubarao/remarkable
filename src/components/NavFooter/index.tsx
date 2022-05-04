import React from 'react';
import { Nav } from 'react-bootstrap';

import { NavLink } from '~/components/NavLink';
import { menuFooter } from '~/data/nav';

export const NavFooter: React.FC = () => (
  <Nav className="flex-column">
    {menuFooter.length &&
      menuFooter.map((item) => (
        <NavLink key={item.id} href={item.href}>
          {item.value}
        </NavLink>
      ))}
  </Nav>
);

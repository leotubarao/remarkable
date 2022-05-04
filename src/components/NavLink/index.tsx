import React from 'react';
import { Nav } from 'react-bootstrap';

import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

export const NavLink: React.FC<LinkProps> = ({ children, ...props }) => {
  const { asPath } = useRouter();
  const className = (asPath === props.href || asPath === props.as) && 'active';

  return (
    <Link href={props.href} passHref>
      <Nav.Link className={className}>{children}</Nav.Link>
    </Link>
  );
};

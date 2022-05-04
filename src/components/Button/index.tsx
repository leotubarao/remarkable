import React from 'react';
import { Button as ButtonRB } from 'react-bootstrap';

import Link from 'next/link';

import { IButton } from '~/types';

export const Button: React.FC<IButton> = ({ children, href, ...rest }) => {
  return (
    <Link href={href} passHref>
      <ButtonRB {...rest}>{children}</ButtonRB>
    </Link>
  );
};

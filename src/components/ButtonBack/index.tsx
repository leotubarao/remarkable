import React, { AnchorHTMLAttributes } from 'react';

import Link from 'next/link';

export const ButtonBack: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  href,
}) => {
  return (
    <Link href={href} passHref>
      <a className="ltco_btn_back">{children}</a>
    </Link>
  );
};

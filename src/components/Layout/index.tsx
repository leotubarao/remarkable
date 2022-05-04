import React from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';

interface LayoutProps {
  header?: boolean;
  footer?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, header, footer }) => {
  return (
    <>
      {header && <Header />}
      {children}
      {footer && <Footer />}
    </>
  );
};

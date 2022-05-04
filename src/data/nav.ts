import { INavMenu } from '~/types';

export const menuHeader: INavMenu[] = [
  {
    id: 0,
    href: '/',
    value: 'Home',
  },
  {
    id: 1,
    href: '/vehicles',
    value: 'Vehicles',
  },
];

export const menuFooter: INavMenu[] = [
  {
    id: 0,
    href: '/vehicles',
    value: 'Vehicles',
  },
  {
    id: 1,
    href: '/about',
    value: 'About Us',
  },
];

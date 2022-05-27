import { IFieldProps } from '~/types';

import { contactFields } from './contactFields';
import { financeFields } from './financeFields';

export * from './contactFields';
export * from './financeFields';

export const libraryMailer: IFieldProps[] = [
  ...contactFields,
  ...financeFields,
];

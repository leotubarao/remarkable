import { FormikValues } from 'formik';

import { IFieldProps } from '~/types';

export const initialValuesForm = (fields: IFieldProps[]): FormikValues => {
  const values = {};

  fields.map(({ name, value }: IFieldProps) => {
    if (typeof value === 'undefined') {
      values[name] = '';
      return;
    }

    values[name] = value;
  });

  return values;
};

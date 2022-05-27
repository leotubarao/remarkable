import React from 'react';
import { FormControl } from 'react-bootstrap';

import { IField } from '~/types';

import { Checkbox } from '../Checkbox';
import { Select } from '../Select';
import { Textarea } from '../Textarea';

type FieldProps = IField;

export const Field: React.FC<FieldProps> = ({ as, ...rest }) => {
  if (as === 'select') return <Select options={[]} {...rest} />;

  if (as === 'check') return <Checkbox {...rest} />;

  if (as === 'textarea') return <Textarea {...rest} />;

  return <FormControl {...rest} />;
};

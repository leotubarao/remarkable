import { TextareaHTMLAttributes } from 'react';
import {
  FormCheckProps,
  FormControlProps,
  FormSelectProps,
} from 'react-bootstrap';

import { IFieldProps } from '../utils/Field';

export type IField = IFieldProps &
  FormControlProps &
  FormSelectProps &
  FormCheckProps &
  TextareaHTMLAttributes;

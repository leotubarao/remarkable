import { TextareaHTMLAttributes } from 'react';
import {
  FormCheckProps,
  FormControlProps,
  FormSelectProps,
} from 'react-bootstrap';

import { InputsForm } from '~/data/inputsForm';

export type IField = InputsForm &
  FormControlProps &
  FormSelectProps &
  FormCheckProps &
  TextareaHTMLAttributes;

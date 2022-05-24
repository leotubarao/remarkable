import React from 'react';
import { Form, FormSelectProps } from 'react-bootstrap';

interface ISelect {
  label: string;
  options: {
    value: string;
    display: string;
  }[];
  feedback?: string;
}

type SelectProps = FormSelectProps & ISelect;

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  feedback,
  ...rest
}) => {
  return (
    <Form.Group>
      <Form.Select {...rest}>
        {options.map(({ value, display }, index: number) => (
          <option key={index} value={value}>
            {display || value}
          </option>
        ))}
        <option value="" disabled selected>
          {label}
        </option>
      </Form.Select>

      <Form.Control.Feedback type="invalid">{feedback}</Form.Control.Feedback>
    </Form.Group>
  );
};

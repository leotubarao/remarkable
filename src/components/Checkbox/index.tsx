import React from 'react';
import { Form, FormCheckProps } from 'react-bootstrap';

type FieldProps = FormCheckProps;

export const Checkbox: React.FC<FieldProps> = ({ feedback, ...rest }) => {
  return (
    <Form.Group>
      <Form.Check
        isInvalid={!!feedback}
        feedback={feedback}
        feedbackType="invalid"
        {...rest}
      />
    </Form.Group>
  );
};

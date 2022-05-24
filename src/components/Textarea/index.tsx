import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

import classNames from 'classnames';

interface ITextarea {
  feedback?: string;
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  ITextarea;

export const Textarea: React.FC<TextareaProps> = ({ feedback, ...rest }) => {
  return (
    <FormGroup>
      <textarea
        className={classNames({
          ['form-control']: true,
          ['is-invalid']: !!feedback,
        })}
        {...rest}
      />

      <FormControl.Feedback type="invalid">{feedback}</FormControl.Feedback>
    </FormGroup>
  );
};

import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

import classNames from 'classnames';

interface ITextarea {
  feedback?: string;
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  ITextarea;

export const Textarea: React.FC<TextareaProps> = ({
  feedback,
  className,
  ...rest
}) => {
  return (
    <>
      <textarea
        className={classNames({
          ['form-control']: true,
          [`${className}`]: !!className,
          ['is-invalid']: !!feedback,
        })}
        {...rest}
      />

      <FormControl.Feedback type="invalid">{feedback}</FormControl.Feedback>
    </>
  );
};

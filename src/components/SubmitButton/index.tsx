import React from 'react';
import { Button, Spinner, ButtonProps } from 'react-bootstrap';

interface SubmitButtonProps extends ButtonProps {
  isValid?: boolean;
  isSubmitting?: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  variant,
  children,
  isValid,
  isSubmitting,
  ...rest
}) => (
  <Button
    variant={variant}
    type="submit"
    className="ltco_btn_stretched"
    disabled={!isValid || isSubmitting}
    {...rest}
  >
    {isSubmitting ? <Spinner animation="border" size="sm" /> : children}
  </Button>
);

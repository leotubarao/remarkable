import React, { useCallback } from 'react';
import { Col, Form } from 'react-bootstrap';

import classNames from 'classnames';
import { useFormik } from 'formik';

import { Field } from '~/components/Field';
import { contactFields } from '~/data/forms';
import { IFieldProps } from '~/types';
import { initialValuesForm, validateFinance } from '~/utils';

import { SubmitButton } from '../SubmitButton';

export const FormContact: React.FC = () => {
  const initialValues = initialValuesForm(contactFields);

  const onSubmitForm = useCallback((values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 2000);
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema: validateFinance,
    onSubmit: onSubmitForm,
  });

  return (
    <Form className="mx-n3" onSubmit={formik.handleSubmit} noValidate>
      {contactFields.map((input: IFieldProps, index: number) => (
        <Col key={index} xs="12" className="mt-4 px-3">
          <Field
            id={input.name}
            name={input.name}
            placeholder={input.placeholder}
            as={input.as}
            value={formik.values[input.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={'bg-gray'}
          />

          {formik.touched[input.name] && formik.errors[input.name] && (
            <div
              className={classNames({
                ['invalid-feedback']: true,
                ['d-block']: formik.errors[input.name],
              })}
            >
              {formik.errors[input.name]}
            </div>
          )}
        </Col>
      ))}

      <Col xs="12" className="mt-4 px-3">
        <SubmitButton
          variant="secondary"
          isValid={formik.isValid}
          isSubmitting={formik.isSubmitting}
        >
          Send
        </SubmitButton>
      </Col>
    </Form>
  );
};

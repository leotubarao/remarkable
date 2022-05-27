import React, { useCallback } from 'react';
import { Col, Form } from 'react-bootstrap';

import classNames from 'classnames';
import { useFormik } from 'formik';

import { Field } from '~/components/Field';
import { financeFields } from '~/data/forms';
import { IFieldProps } from '~/types';
import { initialValuesForm, validateFinance } from '~/utils';

import { SubmitButton } from '../SubmitButton';

export const FormFinance: React.FC = () => {
  const initialValues = initialValuesForm(financeFields);

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
    <Form
      className="d-flex flex-wrap mx-n3"
      onSubmit={formik.handleSubmit}
      noValidate
    >
      {financeFields.map((input: IFieldProps, index: number) => {
        if (input.name === 'credicCheck' || input.name === 'test1') return;

        return (
          <Col
            key={index}
            xs="12"
            md={!input.fullRow ? '6' : '12'}
            className="mt-4 px-3"
          >
            <Field
              id={input.name}
              name={input.name}
              placeholder={input.placeholder}
              as={input.as}
              value={formik.values[input.name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
        );
      })}

      <Col xs="12" className="mt-4 px-3">
        <p>
          Before completing this application it is a requirement that you read
          and accept our{' '}
          <a href="#" className="text-white fw-bold">
            Privacy Act Statement.
          </a>
        </p>
      </Col>

      <Col xs="12" className="mt-4 px-3">
        <Field
          as="check"
          id="credicCheck"
          name="credicCheck"
          label="*I agree to a Credit Check"
          feedback={formik.errors.credicCheck}
          checked={formik.values.credicCheck}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
      </Col>

      <Col xs="12" className="mt-4 px-3">
        <Field
          as="check"
          id="test1"
          name="test1"
          label="by submitting an expres application we will not complete a credit check, one of
          our consultants will review your information and contact you with the best option's
          available for you. We will get back to you within 1 hour during business hours."
          checked={formik.values.test1}
          feedback={formik.errors.test1}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Col>

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

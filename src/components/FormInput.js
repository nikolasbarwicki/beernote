import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const FormInput = ({ label, input, type, min, max, step, fluid }) => {
  return (
    <Form.Field>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>{label}</label>
      <Form.Input
        {...input}
        value={input.value}
        onChange={(param, data) => input.onChange(data.value)}
        placeholder={label}
        type={type}
        min={min}
        max={max}
        step={step}
        fluid={fluid}
      />
    </Form.Field>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
  }).isRequired,
  type: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string,
  fluid: PropTypes.bool,
};

FormInput.defaultProps = {
  type: 'string',
  min: null,
  max: null,
  step: null,
  fluid: false,
};

export default FormInput;

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown as DropdownComponent, Form } from 'semantic-ui-react';
import countryOptions from 'utils/countryOptions';

const Dropdown = ({ label, input }) => (
  <Form.Field>
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label>{label}</label>
    <DropdownComponent
      search
      selection
      options={countryOptions}
      {...input}
      value={input.value}
      onChange={(param, data) => input.onChange(data.value)}
      placeholder={label}
      onBlur={() => input.onBlur(input.value)}
    />
  </Form.Field>
);

Dropdown.propTypes = {
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
  meta: PropTypes.shape.isRequired,
};

export default Dropdown;

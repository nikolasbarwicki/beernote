import React from 'react';
import { Dropdown as DropdownComponent } from 'semantic-ui-react';
import countryOptions from 'utils/countryOptions';

const Dropdown = () => (
  <DropdownComponent
    placeholder="Select Country"
    fluid
    search
    selection
    options={countryOptions}
  />
);

export default Dropdown;

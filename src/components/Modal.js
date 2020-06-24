/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Dropdown from 'components/Dropdown';
import Rating from 'components/Rating';
import { Button, Modal as ModalComponent, Form } from 'semantic-ui-react';
import StringInput from 'components/FormInput';

class Modal extends Component {
  state = { open: false };

  onSubmit = (formValues) => {
    // eslint-disable-next-line no-console
    console.log(formValues);
  };

  show = (dimmer) => () => this.setState({ dimmer, open: true });

  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;
    const { edit, handleSubmit, reset } = this.props;

    return (
      <>
        <Button onClick={this.show(true)} color="green" basic={edit}>
          {edit ? 'Edit' : '+'}
        </Button>

        <ModalComponent
          dimmer={dimmer}
          open={open}
          onClose={this.close}
          size="tiny"
        >
          <ModalComponent.Header>
            {edit ? 'Edit a beer' : 'Add new beer'}
          </ModalComponent.Header>
          <ModalComponent.Content>
            <Form onSubmit={handleSubmit(this.onSubmit)}>
              <Field
                component={Form.Input}
                label="Brewery"
                name="brewery"
                placeholder="Brewery"
              />
              <Field component={Dropdown} name="country" label="Country" />

              <Field component={StringInput} name="name" label="Name" />
              <Field component={StringInput} name="style" label="Style" />

              <Form.Group widths="equal">
                <Field
                  component={StringInput}
                  name="abv"
                  label="ABV"
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  fluid
                />

                <Field
                  component={StringInput}
                  name="ibu"
                  label="IBU"
                  type="number"
                  min="0"
                  max="1000"
                  step="1"
                  fluid
                />
              </Form.Group>

              <Field component={Rating} name="rating" label="Rating" />

              <Form.Group inline>
                <Form.Button primary>Submit</Form.Button>
                <Form.Button onClick={reset}>Reset</Form.Button>
              </Form.Group>
            </Form>
          </ModalComponent.Content>
          <ModalComponent.Actions />
        </ModalComponent>
      </>
    );
  }
}

Modal.propTypes = {
  edit: PropTypes.bool,
  reset: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  edit: false,
};

export default reduxForm({
  form: 'addBeerModal',
})(Modal);

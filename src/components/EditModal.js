/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { updateBeer, fetchBeers, fetchBeer } from 'actions';
import PropTypes from 'prop-types';
import Dropdown from 'components/Dropdown';
import Rating from 'components/Rating';
import { Button, Modal as ModalComponent, Form } from 'semantic-ui-react';
import StringInput from 'components/FormInput';

class EditModal extends Component {
  state = { open: false };

  // NOT WORKING PROPERLY YET!
  onSubmit = async (id, formValues) => {
    const { updateBeer, fetchBeers } = this.props;

    await updateBeer(id, formValues);

    fetchBeers();

    this.setState({ open: false });
  };

  onEditButtonClick = (id, dimmer) => {
    const { fetchBeer } = this.props;

    this.setState({ dimmer, open: true });

    fetchBeer(id);
  };

  show = (dimmer) => () => this.setState({ dimmer, open: true });

  close = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, dimmer } = this.state;
    const { edit, handleSubmit, reset, id } = this.props;

    return (
      <>
        <Button
          onClick={() => this.onEditButtonClick(id)}
          color="green"
          basic={edit}
        >
          Edit
        </Button>

        <ModalComponent
          dimmer={dimmer}
          open={open}
          onClose={this.close}
          size="tiny"
        >
          <ModalComponent.Header>Edit beer</ModalComponent.Header>
          <ModalComponent.Content>
            <Form onSubmit={handleSubmit(this.onSubmit)}>
              <Field
                component={StringInput}
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

const validate = (formValues) => {
  const errors = {};

  if (!formValues.brewery) {
    errors.brewery = 'You must enter a brewery';
  }
  if (!formValues.country) {
    errors.country = 'You must enter a country';
  }
  if (!formValues.name) {
    errors.name = 'You must enter a name';
  }
  if (!formValues.style) {
    errors.style = 'You must enter a style';
  }
  if (!formValues.abv) {
    errors.abv = 'You must enter a abv';
  }
  if (!formValues.ibu) {
    errors.ibu = 'You must enter a ibu';
  }

  return errors;
};

EditModal.propTypes = {
  edit: PropTypes.bool,
  id: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  fetchBeer: PropTypes.func.isRequired,
  updateBeer: PropTypes.func.isRequired,
  fetchBeers: PropTypes.func.isRequired,
};

EditModal.defaultProps = {
  edit: false,
};

const mapStateToProps = (state) => {
  return { initialValues: state.beers.editBeer };
};

const formWrapped = reduxForm({
  form: 'editBeerModal',
  enableReinitialize: true,
  validate,
})(EditModal);

export default connect(mapStateToProps, { updateBeer, fetchBeers, fetchBeer })(
  formWrapped,
);

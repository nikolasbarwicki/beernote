/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'components/Dropdown';
import Rating from 'components/Rating';
import { Button, Modal as ModalComponent, Form } from 'semantic-ui-react';

class Modal extends Component {
  state = { open: false };

  show = (dimmer) => () => this.setState({ dimmer, open: true });

  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;
    const { edit } = this.props;

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
            <Form>
              <Form.Input fluid label="Brewery" placeholder="Brewery" />

              <Form.Field>
                <label>Country</label>
                <Dropdown />
              </Form.Field>

              <Form.Input fluid label="Name" placeholder="Name" />
              <Form.Input fluid label="Style" placeholder="Style" />

              <Form.Group widths="equal">
                <Form.Input
                  label="ABV"
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  fluid
                  placeholder="ABV"
                />

                <Form.Input
                  label="IBU"
                  type="number"
                  min="0"
                  max="1000"
                  step="1"
                  fluid
                  placeholder="IBU"
                />
              </Form.Group>
              <Form.Field>
                <label>Your rating</label>
                <Rating />
              </Form.Field>
            </Form>
          </ModalComponent.Content>
          <ModalComponent.Actions>
            <Button onClick={this.close} negative>
              Close
            </Button>
            <Button
              onClick={this.close}
              positive
              labelPosition="right"
              icon="checkmark"
              content="Add item"
            />
          </ModalComponent.Actions>
        </ModalComponent>
      </>
    );
  }
}

Modal.propTypes = {
  edit: PropTypes.bool,
};

Modal.defaultProps = {
  edit: false,
};

export default Modal;

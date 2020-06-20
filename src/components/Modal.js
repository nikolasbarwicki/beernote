/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'components/Dropdown';
import Rating from 'components/Rating';
import { Button, Modal, Form } from 'semantic-ui-react';

class PrimaryModal extends Component {
  state = { open: false };

  show = (dimmer) => () => this.setState({ dimmer, open: true });

  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;
    const { edit } = this.props;

    return (
      <>
        <Button onClick={this.show(true)} color="grey" basic={edit}>
          {edit ? 'Edit' : 'Add new'}
        </Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close} size="tiny">
          <Modal.Header>{edit ? 'Edit a beer' : 'Add new beer'}</Modal.Header>
          <Modal.Content>
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
          </Modal.Content>
          <Modal.Actions>
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
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}

PrimaryModal.propTypes = {
  edit: PropTypes.bool,
};

PrimaryModal.defaultProps = {
  edit: false,
};

export default PrimaryModal;

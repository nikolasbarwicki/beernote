import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBeer, fetchBeers } from 'actions';
import { Button, Confirm } from 'semantic-ui-react';

class ConfirmModal extends Component {
  state = { open: false };

  open = () => this.setState({ open: true });

  close = async () => {
    const { deleteBeer, fetchBeers, id } = this.props;

    await deleteBeer(id);
    fetchBeers();
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { id } = this.props;

    return (
      <>
        <Button color="red" onClick={this.open} basic>
          Delete
        </Button>
        <Confirm
          size="mini"
          open={open}
          content={`Do you want to delete beer with id: ${id}`}
          onCancel={this.close}
          onConfirm={this.close}
          confirmButton="Delete"
        />
      </>
    );
  }
}

ConfirmModal.propTypes = {
  fetchBeers: PropTypes.func.isRequired,
  deleteBeer: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

ConfirmModal.defaultProps = {};

export default connect(null, { deleteBeer, fetchBeers })(ConfirmModal);

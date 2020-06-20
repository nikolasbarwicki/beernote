import React, { Component } from 'react';
import { Button, Confirm } from 'semantic-ui-react';

class ConfirmExampleConfirm extends Component {
  state = { open: false };

  open = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return (
      <>
        <Button color="red" onClick={this.open} basic>
          Delete
        </Button>
        <Confirm
          size="mini"
          open={open}
          onCancel={this.close}
          onConfirm={this.close}
          confirmButton="Delete"
        />
      </>
    );
  }
}

export default ConfirmExampleConfirm;

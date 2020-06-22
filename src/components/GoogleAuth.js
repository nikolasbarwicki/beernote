import React, { Component } from 'react';
import { Button, Loader, Icon } from 'semantic-ui-react';

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  // Initialize gapi library
  componentDidMount() {
    window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({
        clientId:
          '500433830089-j2n75v25j0aqeaq20e6mmis5etn5nu4c.apps.googleusercontent.com',
        scope: 'email',
      });

      this.auth = window.gapi.auth2.getAuthInstance();
      this.setState({ isSignedIn: this.auth.isSignedIn.get() });
      this.auth.isSignedIn.listen(this.onAuthChange);
    });
  }

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuth() {
    const { isSignedIn } = this.state;

    if (isSignedIn === null) {
      return (
        <Button icon labelPosition="right" color="red">
          <Loader active inverted inline size="mini" />
          <Icon name="google" />
        </Button>
      );
    }
    if (isSignedIn) {
      return (
        <Button onClick={this.onSignOut} icon labelPosition="right" color="red">
          Sign Out
          <Icon name="google" />
        </Button>
      );
    }
    return (
      <Button onClick={this.onSignIn} icon labelPosition="right" color="red">
        Sign In
        <Icon name="google" />
      </Button>
    );
  }

  render() {
    return this.renderAuth();
  }
}

export default GoogleAuth;

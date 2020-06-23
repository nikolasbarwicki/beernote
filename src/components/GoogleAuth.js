import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from 'actions';

import { Button, Loader, Icon } from 'semantic-ui-react';

const GoogleAuth = ({ isSignedIn, signIn, signOut }) => {
  let auth = null;

  const onAuthChange = (signStatus) => {
    if (signStatus) {
      signIn();
    } else {
      signOut();
    }
  };

  useEffect(() => {
    window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({
        clientId:
          '500433830089-j2n75v25j0aqeaq20e6mmis5etn5nu4c.apps.googleusercontent.com',
        scope: 'email',
      });

      auth = window.gapi.auth2.getAuthInstance();
      onAuthChange(auth.isSignedIn.get());
      auth.isSignedIn.listen(onAuthChange);
    });
  });

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  function renderAuthButton() {
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
        <Button onClick={onSignOutClick} icon labelPosition="right" color="red">
          Sign Out
          <Icon name="google" />
        </Button>
      );
    }
    return (
      <Button onClick={onSignInClick} icon labelPosition="right" color="red">
        Sign In
        <Icon name="google" />
      </Button>
    );
  }

  return renderAuthButton();
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

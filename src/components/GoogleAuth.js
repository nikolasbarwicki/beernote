import React, { useState, useEffect } from 'react';
import { Button, Loader, Icon } from 'semantic-ui-react';

const GoogleAuth = () => {
  const [isSignedIn, setSign] = useState(null);

  let auth = null;

  const onAuthChange = () => {
    setSign(auth.isSignedIn.get());
  };

  useEffect(() => {
    window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({
        clientId:
          '500433830089-j2n75v25j0aqeaq20e6mmis5etn5nu4c.apps.googleusercontent.com',
        scope: 'email',
      });

      auth = window.gapi.auth2.getAuthInstance();
      setSign(auth.isSignedIn.get());
      auth.isSignedIn.listen(onAuthChange);
    });
  });

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  function renderAuth() {
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

  return renderAuth();
};

export default GoogleAuth;

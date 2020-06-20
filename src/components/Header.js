import React from 'react';
import { Button, Menu, Container } from 'semantic-ui-react';

import Modal from 'components/Modal';

const Header = () => {
  return (
    <Menu stackable borderless style={{ padding: '0.5em', height: 50 }}>
      <Container content>
        <Menu.Item header>BeerNote App</Menu.Item>

        <Menu.Item position="right">
          <Modal />
        </Menu.Item>
        <Menu.Item>
          <Button
            content="Login with Google"
            icon="google"
            labelPosition="right"
            color="red"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;

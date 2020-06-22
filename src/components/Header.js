import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import GoogleAuth from 'components/GoogleAuth';
import Modal from 'components/Modal';

const Header = () => {
  return (
    <Container fluid>
      <Menu fixed="top" inverted>
        <Container fluid>
          <Menu.Item header>BeerNote</Menu.Item>

          <Menu.Item position="right">
            <Modal />
          </Menu.Item>
          <Menu.Item>
            <GoogleAuth />
          </Menu.Item>
        </Container>
      </Menu>
    </Container>
  );
};

export default Header;

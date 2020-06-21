import React from 'react';
import { Button, Menu, Container, Responsive } from 'semantic-ui-react';

import Modal from 'components/Modal';

const Header = () => {
  return (
    <Container fluid>
      <Menu fixed="top" inverted>
        <Container fluid>
          <Menu.Item header>BeerNote App</Menu.Item>

          <Menu.Item position="right">
            <Modal />
          </Menu.Item>
          <Menu.Item>
            <Responsive
              {...Responsive.onlyMobile}
              as={Button}
              icon="google"
              color="red"
            />
            <Responsive
              as={Button}
              content="Login with Google"
              icon="google"
              labelPosition="right"
              color="red"
              minWidth={Responsive.onlyTablet.minWidth}
            />
          </Menu.Item>
        </Container>
      </Menu>
    </Container>
  );
};

export default Header;

import React from 'react';
import CardItem from 'components/CardItem';
import Header from 'components/Header';

import { Grid, Container } from 'semantic-ui-react';

const App = () => {
  return (
    <Container fluid>
      <Header />

      <Container content>
        <Grid columns="4" padded="horizontally" stackable>
          <Grid.Column>
            <CardItem />
          </Grid.Column>
          <Grid.Column>
            <CardItem />
          </Grid.Column>
          <Grid.Column>
            <CardItem />
          </Grid.Column>
          <Grid.Column>
            <CardItem />
          </Grid.Column>
          <Grid.Column>
            <CardItem />
          </Grid.Column>
        </Grid>
      </Container>
    </Container>
  );
};

export default App;

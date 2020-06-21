import React from 'react';
import CardItem from 'components/CardItem';
import Header from 'components/Header';

import { Grid, Container } from 'semantic-ui-react';

const App = () => {
  return (
    <>
      <Header />
      <Container content style={{ marginTop: 70 }}>
        <Grid columns="4" stackable stretched>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </Grid>
      </Container>
    </>
  );
};

export default App;

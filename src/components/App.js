import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBeers } from 'actions';
import CardItem from 'components/CardItem';
import Header from 'components/Header';

import { Grid, Container, Loader } from 'semantic-ui-react';

const App = ({ beers, fetchBeers }) => {
  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <>
      <Header />
      <Container content style={{ marginTop: 70 }}>
        <Grid columns="4" stackable stretched>
          {beers.length === 0 ? (
            <Loader active size="huge" />
          ) : (
            beers.map((beer) => {
              return (
                <CardItem
                  // eslint-disable-next-line no-underscore-dangle
                  key={beer._id}
                  abv={beer.abv}
                  brewery={beer.brewery}
                  country={beer.country}
                  ibu={beer.ibu}
                  name={beer.name}
                  rating={beer.rating}
                  style={beer.style}
                  // eslint-disable-next-line no-underscore-dangle
                  id={beer._id}
                  userId={beer.userId}
                  date={beer.createdAt}
                />
              );
            })
          )}
        </Grid>
      </Container>
    </>
  );
};

App.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object),
  fetchBeers: PropTypes.func.isRequired,
};

App.defaultProps = {
  beers: [],
};

const mapStateToProps = (state) => {
  return { beers: state.beers.data };
};

export default connect(mapStateToProps, { fetchBeers })(App);

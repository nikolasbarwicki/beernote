import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, List, Flag, Grid, Rating } from 'semantic-ui-react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import EditModal from 'components/EditModal';
import ConfirmModal from 'components/ConfirmModal';
import countryOptions from 'utils/countryOptions';

const CardItem = ({
  abv,
  brewery,
  country,
  ibu,
  name,
  rating,
  style,
  id,
  date,
}) => (
  <Grid.Column>
    <Card centered>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{style}</Card.Description>
      </Card.Content>
      <Card.Content>
        <List>
          <List.Item>
            <List.Icon name="point" verticalAlign="middle" color="grey" />
            <List.Content>
              <List.Header>{brewery}</List.Header>
              <List.Description>
                <Flag name={country} />
                {countryOptions.find((el) => el.key === country).text}
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Card.Content>
      <Card.Content>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <List>
                <List.Item>
                  <List.Icon
                    name="chevron right"
                    verticalAlign="middle"
                    color="grey"
                  />
                  <List.Content>
                    <List.Header>ABV</List.Header>
                    <List.Description>{abv}%</List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>
                  <List.Icon
                    name="chevron right"
                    verticalAlign="middle"
                    color="grey"
                  />
                  <List.Content>
                    <List.Header>IBU</List.Header>
                    <List.Description>{ibu}</List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
      <Card.Content>
        <Rating
          defaultRating={rating}
          maxRating={5}
          disabled
          icon="star"
          size="huge"
        />
      </Card.Content>
      <Card.Content>
        <List>
          <List.Item>
            <Icon name="calendar" color="grey" />
            <List.Content>
              <List.Description>
                {formatDistanceToNow(new Date(date))}
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <EditModal id={id} edit />
          <ConfirmModal id={id} />
        </div>
      </Card.Content>
    </Card>
  </Grid.Column>
);

CardItem.propTypes = {
  abv: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  ibu: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  style: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

CardItem.defaultProps = {};

export default CardItem;

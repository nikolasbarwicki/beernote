import React from 'react';
import { Card, Icon, List, Flag, Grid, Rating } from 'semantic-ui-react';
import ConfirmModal from 'components/ConfirmModal';
import ModalModalExample from 'components/Modal';

const CardItem = () => (
  <Card>
    <Card.Content>
      <Card.Header>Salamander Strawberry</Card.Header>
      <Card.Description>IPA - Milkshake</Card.Description>
    </Card.Content>
    <Card.Content>
      <List>
        <List.Item>
          <List.Icon name="point" verticalAlign="middle" color="grey" />
          <List.Content>
            <List.Header>Browar Stu Mostów</List.Header>
            <List.Description>
              <Flag name="pl" />
              Poland
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
                  <List.Description>5.9%</List.Description>
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
                  <List.Description>50</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Card.Content>
    <Card.Content>
      <Rating
        defaultRating={3}
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
            <List.Description>3 days ago</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Card.Content>
    <Card.Content extra>
      <div className="ui two buttons">
        <ModalModalExample edit />
        <ConfirmModal />
      </div>
    </Card.Content>
  </Card>
);

export default CardItem;

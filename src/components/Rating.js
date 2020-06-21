import React from 'react';
import { Rating as RatingComponent } from 'semantic-ui-react';

class Rating extends React.Component {
  CheckRating = (event, data) => {
    console.log(data.rating);
  };

  render() {
    return (
      <RatingComponent
        size="huge"
        icon="star"
        defaultRating={1}
        maxRating={5}
        onRate={this.CheckRating}
      />
    );
  }
}
export default Rating;

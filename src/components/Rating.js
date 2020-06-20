import React from 'react';
import { Rating } from 'semantic-ui-react';

class Test extends React.Component {
  CheckRating = (event, data) => {
    console.log(data.rating);
  };

  render() {
    return (
      <Rating
        size="huge"
        icon="star"
        defaultRating={1}
        maxRating={5}
        onRate={this.CheckRating}
      />
    );
  }
}
export default Test;

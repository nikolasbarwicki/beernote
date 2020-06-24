import React from 'react';
import PropTypes from 'prop-types';
import { Form, Rating } from 'semantic-ui-react';

class renderRating extends React.Component {
  handleRate = (e, { rating }) => {
    const { input } = this.props;

    input.onChange(rating);
  };

  render() {
    return (
      <Form.Field>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Rating</label>
        <Rating
          icon="star"
          size="huge"
          {...this.props}
          maxRating={5}
          onRate={this.handleRate}
        />
      </Form.Field>
    );
  }
}

renderRating.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.number,
  }).isRequired,
};

export default renderRating;

import {
  FETCH_BEERS,
  FETCH_BEER,
  CREATE_BEER,
  UPDATE_BEER,
} from 'actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BEERS:
      return { ...state, data: action.payload };
    case FETCH_BEER:
      return { ...state, editBeer: action.payload.data };
    case CREATE_BEER:
      return { ...state, [action.payload]: action.payload };
    case UPDATE_BEER:
      return { ...state, [action.payload]: action.payload };

    default:
      return state;
  }
};

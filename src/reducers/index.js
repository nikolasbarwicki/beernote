import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from 'reducers/authReducer';
import beerReducer from 'reducers/beerReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  beers: beerReducer,
});

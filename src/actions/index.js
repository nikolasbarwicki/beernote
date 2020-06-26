import beers from 'apis/beers';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_BEER,
  FETCH_BEERS,
  FETCH_BEER,
  UPDATE_BEER,
  DELETE_BEER,
} from 'actions/types';

/* eslint-disable import/prefer-default-export */
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createBeer = (formValues) => async (dispatch) => {
  const response = await beers.post('/api/v1/beers/', formValues, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  dispatch({ type: CREATE_BEER, payload: response.data });
};

export const fetchBeers = () => async (dispatch) => {
  const response = await beers.get('/api/v1/beers/');

  dispatch({ type: FETCH_BEERS, payload: Object.values(response.data.data) });
};

export const fetchBeer = (id) => async (dispatch) => {
  const response = await beers.get(`/api/v1/beers/${id}`);

  dispatch({ type: FETCH_BEER, payload: response.data });
};

export const updateBeer = (id, formValues) => async (dispatch) => {
  const response = await beers.put(`/api/v1/beers/${id}`, formValues, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  dispatch({ type: UPDATE_BEER, payload: response.data });
};

export const deleteBeer = (id) => async (dispatch) => {
  const response = await beers.delete(`/api/v1/beers/${id}`);

  dispatch({ type: DELETE_BEER, payload: response.data });
};

import { SIGN_IN, SIGN_OUT } from 'actions/types';

/* eslint-disable import/prefer-default-export */
export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

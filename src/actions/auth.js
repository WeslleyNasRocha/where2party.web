export const login = ({ email, password }) => ({
  type: 'LOGIN_FIREBASE',
  payload: { email, password },
});

export const register = ({ email, password }) => ({
  type: 'REGISTER_FIREBASE',
  payload: { email, password },
});

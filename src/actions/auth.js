export const login = ({ email, password }) => ({
  type: 'LOGIN_FIREBASE',
  payload: { email, password }
});

import { toast } from 'react-toastify';
import { firebase } from '../firebase/firebase';

export const login = uid => ({
  type: 'LOGIN',
  uid,
});

export const startLogin = (email, password) => () =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(toast.success('Logado com sucesso'))
    .catch((e) => {
      toast.error(e);
    });

export const logout = () => ({
  type: 'LOGOUT',
});

export const startLogout = () => () =>
  firebase
    .auth()
    .signOut()
    .then(toast.success('Saiu com sucesso'))
    .catch((e) => {
      toast.error(e);
    });
// export const register = ({ email, password }) => ({
//   type: 'REGISTER_FIREBASE',
//   payload: { email, password },
// });

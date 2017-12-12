import { toast } from 'react-toastify';
import { firebase } from '../firebase/firebase';

export const login = uid => ({
  type: 'LOGIN',
  uid,
});

export const startLogin = (email, password) => () => {
  let erro = null;
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((e) => {
      switch (e.code) {
        case 'auth/user-not-found':
          erro = 'Usuario não encontrado';
          break;
        case 'auth/wrong-password':
          erro = 'Usuario ou senha invalidos';
          break;
        default:
          erro = e.message;
          break;
      }
      toast.error(erro);
    })
    .then(() => {
      if (!erro) {
        toast.success('logado com sucesso');
      }
    });
};

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

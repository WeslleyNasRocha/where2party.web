import firebase from 'firebase';
import { toast } from 'react-toastify';

const authDefaultState = { user: '', redirect: {} };

export default (state = authDefaultState, action) => {
  switch (action.type) {
    case 'LOGIN_FIREBASE':
    default:
      return state;
  }
};

/** const { email, password } = action.payload;
      firebase
        .app()
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((snapshot) => {
          // console.log(snapshot);
          toast.success('Logado com sucesso');
          // localStorage.setItem('user', snapshot.)
          return {
            ...state,
            user: firebase.auth().currentUser,
          };
        })
        .catch((error) => {
          let msg = 'Erro desconhecido';
          switch (error.code) {
            case 'auth/invalid-email':
              msg = 'Email invalido';
              break;
            case 'auth/user-not-found':
            case 'auth/wrong-password':
              msg = 'Email ou senha incorreto';
              break;
            default:
              console.log(error);
              break;
          }
          toast.error(msg, { position: toast.POSITION.TOP_CENTER });

          return state;
        }); */

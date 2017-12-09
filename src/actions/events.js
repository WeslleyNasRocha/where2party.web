import { toast } from 'react-toastify';
import database from '../firebase/firebase';

export const addEvent = event => ({
  type: 'ADD_EVENT',
  event,
});

export const startAddEvent = (eventData = {}) => (dispatch) => {
  // const {
  //   descricao, titulo, local, data, image, orgId, address,
  // } = eventData;
  // const event = {
  //   descricao,
  //   titulo,
  //   local,
  //   data,
  //   image,
  //   orgId,
  //   address,
  // };
  const {
    Titulo, Descricao, Address, Data, Local,
  } = eventData;
  const event = {
    Titulo,
    Descricao,
    Address,
    Data,
    Local,
  };
  console.log(eventData);
  database
    .ref('eventos')
    .push(event)
    .then((ref) => {
      toast.success('Evento Adicionado com sucesso');
      dispatch(addEvent({
        id: ref.key,
        ...event,
      }));
    });
};

export const removeEvent = ({ id } = {}) => ({
  type: 'REMOVE_EVENT',
  id,
});

export const startRemoveEvent = ({ id } = {}) => dispatch =>
  database
    .ref(`eventos/${id}`)
    .remove()
    .then(() => {
      toast.success('Evento deletado com sucesso');
      dispatch(removeEvent({ id }));
    });

export const editEvent = (id, updates) => ({
  type: 'EDIT_EVENT',
  id,
  updates,
});

export const startEditEvent = (updates, id) => (dispatch) => {
  database
    .ref(`eventos/${id}`)
    .set(updates)
    .then(() => {
      toast.success('Evento atualizado com sucesso');
      console.log(id, updates);
      dispatch(editEvent(id, updates));
    });
};

export const setEvents = events => ({
  type: 'SET_EVENTS',
  events,
});

export const startSetEvent = () => dispatch =>
  database
    .ref('eventos')
    .once('value')
    .then((snapshot) => {
      const events = [];

      snapshot.forEach((childSnapshot) => {
        events.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });

      dispatch(setEvents(events));
    });

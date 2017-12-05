import uuid from 'uuid';
import database from '../firebase/firebase';

export const addEvent = ({
  descricao, titulo, local, data, image, orgId, address, createdAt = 0,
} = {}) => ({
  type: 'ADD_EVENT',
  event: {
    id: uuid(),
    descricao,
    address,
    titulo,
    local,
    data,
    image,
    orgId,
    createdAt,
  },
});

// export const addEvent = event => ({
//   type: 'ADD_EVENT',
//   event,
// });

const startAddEvent = (eventData = {}) => (dispatch) => {
  const {
    descricao, titulo, local, data, image, orgId, address,
  } = eventData;
  const event = {
    descricao,
    titulo,
    local,
    data,
    image,
    orgId,
    address,
  };
  database
    .ref('events')
    .push(event)
    .then((ref) => {
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

export const editEvent = (id, updates) => ({
  type: 'EDIT_EVENT',
  id,
  updates,
});

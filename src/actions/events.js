import uuid from 'uuid';

// const addEvent = ({
//   descricao, titulo, data, tags, image,
// } = {}) => ({
//   type: 'ADD_EVENT',
//   event: {
//     id: uuid(),
//     descricao,
//     titulo,
//     data,
//     tags,
//     image,
//   },
// });

export const addEvent = ({ description, titulo } = {}) => ({
  type: 'ADD_EVENT',
  event: {
    id: uuid(),
    description,
    titulo,
  },
});

export const removeEvent = ({ id } = {}) => ({
  type: 'REMOVE_EVENT',
  id,
});

export const editEvent = (id, updates) => ({
  type: 'EDIT_EVENT',
  id,
  updates,
});

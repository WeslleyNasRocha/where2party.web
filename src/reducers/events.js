const eventReducerDefaultState = [];

const eventReducer = (state = eventReducerDefaultState, action) => {
  // console.log(action.type, action);
  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, action.event];
    case 'REMOVE_EVENT':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EVENT':
      return state.map((event) => {
        if (event.id === action.id) {
          return {
            ...event,
            ...action.updates,
          };
        }
        return event;
      });
    case 'SET_EVENTS':
      return action.events;
    // return ['carai'];
    default:
      return state;
  }
};

export default eventReducer;

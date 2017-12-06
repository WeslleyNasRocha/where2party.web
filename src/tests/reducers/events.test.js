import eventReducer from '../../reducers/events';

import events from '../fixtures/events';

test('should set default state', () => {
  const state = eventReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove event by id', () => {
  const action = {
    type: 'REMOVE_EVENT',
    id: events[1].id,
  };
  const state = eventReducer(events, action);
  expect(state).toEqual([events[0], events[2]]);
});

test('should not remove event by id', () => {
  const action = {
    type: 'REMOVE_EVENT',
    id: -1,
  };
  const state = eventReducer(events, action);
  expect(state).toEqual(events);
});

test('should add an event', () => {
  const event = {
    ...events[0],
    id: 4,
  };

  const action = {
    type: 'ADD_EVENT',
    event,
  };
  const state = eventReducer(events, action);
  expect(state).toEqual([...events, event]);
});

test('should edit an event', () => {
  const titulo = 'Show de bar';
  const action = {
    type: 'EDIT_EVENT',
    id: events[0].id,
    updates: {
      titulo,
    },
  };
  const state = eventReducer(events, action);
  expect(state[0].titulo).toBe(titulo);
});

test('should not edit an event', () => {
  const titulo = 'Show de bar';
  const action = {
    type: 'EDIT_EVENT',
    id: -1,
    updates: {
      titulo,
    },
  };
  const state = eventReducer(events, action);
  expect(state).toEqual(events);
});

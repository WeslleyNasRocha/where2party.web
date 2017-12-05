import { addEvent, editEvent, removeEvent } from '../../actions/events';

test('should set up remove event object', () => {
  const action = removeEvent({ id: '123abc' });

  expect(action).toEqual({
    type: 'REMOVE_EVENT',
    id: '123abc',
  });
});

test('should set up edit event object', () => {
  const id = '123abc';
  const action = editEvent(id, { titulo: 'novo titulo' });

  expect(action).toEqual({
    type: 'EDIT_EVENT',
    id: '123abc',
    updates: {
      titulo: 'novo titulo',
    },
  });
});

test('');

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

test('should add event action object with provided values', () => {
  const eventData = {
    address: 'Av. Comendador Enzo Ferrari, 228 - Swift, Campinas - SP, Brazil',
    data: '09/21/17',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate mi in turpis dapibus facilisis.',
    local: {
      latitude: -22.925993333333334,
      latitudeDelta: 0.015,
      longitude: -47.03723,
      longitudeDelta: 0.0121,
    },
    titulo: 'Festa 1',
    image: 'X2e8wZADnwhU3EonNmH6ppqO9g73++1505237223764.jpeg',
    orgId: 'X2e8wZADnwhU3EonNmH6ppqO9g73',
    createdAt: 32132,
  };
  const action = addEvent(eventData);
  expect(action).toEqual({
    type: 'ADD_EVENT',
    event: {
      ...eventData,
      id: expect.any(String),
    },
  });
});

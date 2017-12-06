import moment from 'moment';
import selectEvents from '../../selectors/events';

import events from '../fixtures/events';

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const results = selectEvents(events, filters);
  expect(results).toEqual([events[1], events[2]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment('01/01/2018', 'DD/MM/YYYY'),
    endDate: undefined,
  };
  const results = selectEvents(events, filters);
  expect(results).toEqual([events[2]]);
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment('01/01/2018', 'DD/MM/YYYY'),
  };
  const results = selectEvents(events, filters);
  expect(results).toEqual([events[0], events[1]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const results = selectEvents(events, filters);
  expect(results).toEqual([events[0], events[1], events[2]]);
});

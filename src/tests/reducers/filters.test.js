import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set sortBy to date', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'filtrado' });
  expect(state.text).toBe('filtrado');
});

test('should set startDate filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE_FILTER',
    startDate: moment('24/12/17', 'DD/MM/YY'),
  });
  expect(state.startDate).toEqual(moment('24/12/17', 'DD/MM/YY'));
});
test('should set sendDate filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE_FILTER',
    endDate: moment('24/12/17', 'DD/MM/YY'),
  });
  expect(state.endDate).toEqual(moment('24/12/17', 'DD/MM/YY'));
});

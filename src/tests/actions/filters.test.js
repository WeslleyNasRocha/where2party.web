import moment from 'moment';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setEndDate,
  setStartDate,
} from '../../actions/filters';

test('should generate startdate action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE_FILTER',
    startDate: moment(0),
  });
});

test('should generate startdate action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE_FILTER',
    endDate: moment(0),
  });
});

// test('should generate sortByAmount action object', () => {
//   const action = sortByAmount();
//   expect(action).toEqual({
//     type: 'SET_SORT_BY_AMOUNT_FILTER',
//     sortBy: 'amount',
//   });
// });

test('should generate sortByDate action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SET_SORT_BY_DATE_FILTER',
    sortBy: 'date',
  });
});

test('should generate setTextFilter action object', () => {
  const text = 'filtro';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text,
  });
});

test('should generate setTextFilter action object with default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

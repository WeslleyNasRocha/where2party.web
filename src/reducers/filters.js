import moment from 'moment';

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    // case 'SET_SORT_BY_AMOUNT_FILTER':
    //   return { ...state, sortBy: action.sortBy };
    case 'SET_SORT_BY_DATE_FILTER':
      return { ...state, sortBy: action.sortBy };
    case 'SET_START_DATE_FILTER':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE_FILTER':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

export default filterReducer;

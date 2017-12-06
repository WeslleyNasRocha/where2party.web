import moment from 'moment';

// Get visible events

export default (events, {
  text, startDate, endDate,
}) =>
  events
    .filter((event) => {
      const dataEvent = moment(event.data, 'DD/MM/YY');
      const createdAtMoment = moment(dataEvent);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
      const textMatch = event.titulo.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

import yup from 'yup';
import Moment from 'moment';

const date = '';

yup.addMethod(yup.date, 'format', function (formats, parseStrict) {
  return this.transform(function (value, originalValue) {
    console.log(value, originalValue);
    if (this.isType(value)) return value;

    value = Moment(originalValue, formats, parseStrict);
    console.log(value);
    return value.isValid() ? value.toDate() : invalidDate;
  });
});

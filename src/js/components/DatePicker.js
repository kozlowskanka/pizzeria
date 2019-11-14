import { select, settings } from '../settings.js';
import { utils } from '../utils.js';
import BaseWidget from './BaseWidget.js';

class DatePicker extends BaseWidget {
  constructor(wrapper) {
    super(wrapper, utils.dateToStr(new Date()));
    const thisWidget = this;

    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.input);

    thisWidget.initPlugin();
  }

  initPlugin(){
    const thisWidget = this;

    thisWidget.minDate = new Date(thisWidget.value);
    thisWidget.maxDate = utils.addDays(thisWidget.minDate, settings.datePicker.maxDaysInFuture);

    const options = {
      defaultDate: thisWidget.minDate,
      minDate: thisWidget.minDate,
      maxDate: thisWidget.maxDate,
      locale: {
        'firstDayOfWeek': 1
      },
      disable: [
        function (date) {
          return (date.getDay() === 1);
        }
      ],
      onChange: function (selectedDates, dateToStr) {
        thisWidget.value = dateToStr;
      }
    };

    flatpickr(thisWidget.dom.input, options); // eslint-disable-line
  }

  parseValue(value){
    return value;
  }

  isValid(){
    return true;
  }

  renderValue(){
    return null;
  }
}

export default DatePicker;
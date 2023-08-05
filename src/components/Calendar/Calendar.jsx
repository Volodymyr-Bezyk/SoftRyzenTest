import { useState } from 'react';
import moment from 'moment';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import FormTextInput from 'components/FormTextInput/FormTextInput';
import { dateFormatter } from 'utils/dateFormatter';

import {
  StyledDatetime,
  CalendarButtons,
  CalendarButtonCancel,
  CalendarButtonChoose,
  CalendarMoreButton,
} from './Calendar.styled';

const Calendar = props => {
  const { field } = props;

  const [calendarClosed, setCalendarClosed] = useState(true);
  const [selectedDate, setSelectedDate] = useState('');

  const yesterday = moment().subtract(1, 'day');
  function valid(current) {
    return current.isAfter(yesterday);
  }

  const onChange = date => {
    setSelectedDate(dateFormatter(date));
    field?.onChange(date);
  };

  const toggleCalendar = () => {
    setCalendarClosed(!calendarClosed);
  };

  const chooseDate = () => {
    setCalendarClosed(true);
  };
  const cancelDate = () => {
    setCalendarClosed(true);
    setSelectedDate('');
  };

  const CalendarContent = props => (
    <FormTextInput text="Select date" clear={false} showInput={false}>
      <input
        required
        disabled
        value={selectedDate}
        placeholder={!calendarClosed ? 'Select date' : 'Input'}
      />

      {!calendarClosed && (
        <CalendarButtons>
          <CalendarButtonCancel
            onClick={() => {
              cancelDate();
            }}
            type="button"
          >
            Cancel
          </CalendarButtonCancel>
          <CalendarButtonChoose onClick={() => chooseDate()} type="button">
            Choose date
          </CalendarButtonChoose>
        </CalendarButtons>
      )}

      <CalendarMoreButton type="button" onClick={() => toggleCalendar()}>
        {!calendarClosed && <MdExpandLess size={24} />}
        {calendarClosed && <MdExpandMore size={24} />}
      </CalendarMoreButton>
    </FormTextInput>
  );

  return (
    <StyledDatetime
      isValidDate={valid}
      timeFormat={false}
      dateFormat="DD.MM.YYYY"
      input={true}
      open={!calendarClosed}
      onChange={onChange}
      renderInput={props => <CalendarContent />}
    />
  );
};

export default Calendar;

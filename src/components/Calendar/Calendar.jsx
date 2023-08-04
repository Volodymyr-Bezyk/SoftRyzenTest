import { useState, useEffect } from 'react';
import moment from 'moment';
import { MdExpandMore } from 'react-icons/md';
import FormTextInput from 'components/FormTextInput/FormTextInput';

import {
  FormLabel,
  FormLabelText,
  StyledDatetime,
  CalendarWrap,
  CalendarButtons,
  CalendarButtonCancel,
  CalendarButtonChoose,
  CalendarMoreButton,
} from './Calendar.styled';

const Calendar = () => {
  const [calendarClosed, setCalendarClosed] = useState(true);
  const [selectedDate, setSelectedDate] = useState('');

  const yesterday = moment().subtract(1, 'day');
  function valid(current) {
    return current.isAfter(yesterday);
  }

  const toggleCalendar = () => {
    setCalendarClosed(!calendarClosed);
  };

  const chooseDate = () => {
    setCalendarClosed(true);
  };
  const cancelDate = () => {
    setCalendarClosed(true);
    setSelectedDate(null);
  };

  //   console.log('selectedDate', selectedDate);

  return (
    <FormLabel>
      <FormLabelText>Select date</FormLabelText>
      <CalendarWrap>
        <StyledDatetime
          isValidDate={valid}
          timeFormat={false}
          dateFormat="DD.MM.YYYY"
          input={true}
          closeOnSelect={false}
          open={!calendarClosed}
          inputProps={{
            placeholder: !calendarClosed ? 'Select date' : 'Input',
            disabled: true,
            required: true,
          }}
          value={selectedDate}
          onChange={date => {
            setSelectedDate(date);
          }}
          renderInput={props => <FormTextInput />}
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
      </CalendarWrap>

      <CalendarMoreButton type="button" onClick={() => toggleCalendar()}>
        <MdExpandMore size={24} />
      </CalendarMoreButton>
    </FormLabel>
  );
};

export default Calendar;

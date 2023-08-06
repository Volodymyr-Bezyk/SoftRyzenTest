import { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

import { dateFormatter } from 'utils/dateFormatter';

import FormTextInput from 'components/FormTextInput/FormTextInput';

import {
  ValidationErrorText,
  CalendarInput,
  StyledDatetime,
  CalendarButtons,
  CalendarButtonCancel,
  CalendarButtonChoose,
  CalendarMoreButton,
} from './Calendar.styled';

const Calendar = props => {
  const { field, error = '', value = '' } = props;
  const [calendarClosed, setCalendarClosed] = useState(true);
  const [selectedDate, setSelectedDate] = useState('');
  const firstRender = useRef(true);

  useEffect(() => {
    if (value && firstRender.current) {
      setSelectedDate(value);
      field?.onChange(value);
      firstRender.current = false;
    }
  }, [field, value]);

  const yesterday = moment().subtract(1, 'day');
  function valid(current) {
    return current.isAfter(yesterday);
  }

  const onChange = date => {
    setSelectedDate(dateFormatter(date));
    field?.onChange(dateFormatter(date));
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
    field?.onChange('');
  };

  const CalendarContent = props => {
    return (
      <FormTextInput
        text="Select date"
        clear={false}
        showInput={false}
        error={error}
      >
        <CalendarInput
          required
          disabled
          value={selectedDate}
          placeholder={!calendarClosed ? 'Select date' : 'Input'}
          $focus={!calendarClosed}
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

        {error && <ValidationErrorText>{error}</ValidationErrorText>}
      </FormTextInput>
    );
  };

  return (
    <StyledDatetime
      isValidDate={valid}
      timeFormat={false}
      dateFormat="DD.MM.YYYY"
      input={true}
      open={!calendarClosed}
      onChange={onChange}
      renderInput={props => <CalendarContent {...props} />}
    />
  );
};

export default Calendar;

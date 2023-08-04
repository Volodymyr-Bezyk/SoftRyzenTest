import moment from 'moment';
import { useState } from 'react';
import {
  StyledDatetime,
  CalendarWrap,
  CalendarButtons,
  CalendarButtonCancel,
  CalendarButtonChoose,
} from './Calendar.styled';

const Calendar = () => {
  const [closeCalendar, setCloseCalendar] = useState(true);
  const [date, setDate] = useState('');

  const yesterday = moment().subtract(1, 'day');
  function valid(current) {
    return current.isAfter(yesterday);
  }

  const toggleCalendar = () => setCloseCalendar(!closeCalendar);

  const chooseDate = () => {
    setCloseCalendar(true);
    toggleCalendar();
    console.log('gagaga', closeCalendar, date);
  };
  const cancelDate = () => {
    setDate('');
    setCloseCalendar(true);
    console.log('hahah', closeCalendar, date);
  };

  return (
    <CalendarWrap onClick={() => setCloseCalendar(false)}>
      <StyledDatetime
        isValidDate={valid}
        timeFormat={false}
        dateFormat="DD.MM.YYYY"
        // input={true}
        // closeOnSelect={false}
        open={!closeCalendar}
        // value={date}
        inputProps={{
          placeholder: !closeCalendar ? 'Select date' : 'Input',
          //   required: true,
        }}
        onChange={value => setDate(value)}
      />

      {!closeCalendar && (
        <CalendarButtons>
          <CalendarButtonCancel
            onClick={() => {
              console.log('closeCalendar', closeCalendar);
              setCloseCalendar(true);
            }}
            type="button"
          >
            Cancel
          </CalendarButtonCancel>
          <CalendarButtonChoose
            onClick={() => {
              console.log('closeCalendar', closeCalendar);
              setCloseCalendar(true);
            }}
            type="button"
          >
            Choose date
          </CalendarButtonChoose>
        </CalendarButtons>
      )}
    </CalendarWrap>
  );
};

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const Calendar = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);

//   const handleChoose = () => {
//     // Виконати дії після вибору дати
//     console.log('Ви вибрали дату:', selectedDate);
//     setIsCalendarOpen(false); // Закрити календар після вибору
//   };

//   const handleCancel = () => {
//     // Виконати дії при скасуванні вибору
//     setSelectedDate(null);
//     setIsCalendarOpen(false); // Закрити календар при скасуванні
//   };

//   return (
//     <div className="calendar-container">
//       <button className="action-button" onClick={() => setIsCalendarOpen(true)}>
//         Open Calendar
//       </button>
//       {isCalendarOpen && (
//         <div className="calendar-content">
//           <DatePicker
//             selected={selectedDate}
//             onChange={date => setSelectedDate(date)}
//             dateFormat="dd.MM.yyyy"
//           />
//           <button className="action-button" onClick={handleChoose}>
//             Choose
//           </button>
//           <button className="action-button" onClick={handleCancel}>
//             Cancel
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

export default Calendar;

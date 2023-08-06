import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import { useState, useEffect, useRef } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

import FormTextInput from 'components/FormTextInput';

import {
  ClockWrap,
  ClockMoreButton,
  ValidationErrorText,
} from './Clock.styled';

const Clock = props => {
  const { field, error = '', value = '' } = props;
  const [openClock, setOpenClock] = useState(false);
  const [time, setTime] = useState('');
  const firstRender = useRef(true);

  useEffect(() => {
    if (value && firstRender.current) {
      setTime(dayjs(value));
      field?.onChange(dayjs(value));
      firstRender.current = false;
    }
  }, [field, value]);

  const onSelectTime = time => {
    setTime(time);
    field?.onChange(time);

    setTime(time);
    field?.onChange(time);
  };

  return (
    <FormTextInput
      text="Select time"
      fieldName="time"
      showInput={false}
      clear={false}
    >
      <ClockWrap wrap $open={openClock} $error={error} $focus={openClock}>
        <TimePicker
          open={openClock}
          onSelect={onSelectTime}
          inputReadOnly={true}
          value={time}
          className="clock"
          use12Hours
          format="hh:mm a"
          placeholder={openClock ? 'Select time' : 'Input'}
          bottomLeft={true}
          showNow={false}
          popupClassName="custom-time-picker"
          // popupStyle={{ color: 'red', backgroundColor: 'tomato' }}
        />
      </ClockWrap>

      <ClockMoreButton type="button" onClick={() => setOpenClock(!openClock)}>
        {openClock && <MdExpandLess size={24} />}
        {!openClock && <MdExpandMore size={24} />}
      </ClockMoreButton>
      {error && <ValidationErrorText>{error}</ValidationErrorText>}
    </FormTextInput>
  );
};
export default Clock;

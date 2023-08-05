import { TimePicker } from 'antd';
import { useState } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import FormTextInput from 'components/FormTextInput';

import { ClockWrap, ClockMoreButton } from './Clock.styled';

const Clock = props => {
  const { field } = props;
  const [openClock, setOpenClock] = useState(false);
  const [time, setTime] = useState(false);

  const onSelectTime = time => {
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
      <ClockWrap wrap $open={openClock}>
        <TimePicker
          open={openClock}
          onSelect={onSelectTime}
          inputReadOnly={true}
          value={time}
          className="clock"
          use12Hours
          format="hh:mm a"
          placeholder={openClock ? 'Select time' : 'Input'}
          placement="bottomLeft"
          showNow={false}
          popupStyle={{}}
          popupClassName="custom-time-picker"
        />
      </ClockWrap>

      <ClockMoreButton type="button" onClick={() => setOpenClock(!openClock)}>
        {openClock && <MdExpandLess size={24} />}
        {!openClock && <MdExpandMore size={24} />}
      </ClockMoreButton>
    </FormTextInput>
  );
};
export default Clock;

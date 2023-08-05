import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';

import {
  FormLabel,
  FormLabelText,
  FormLabelTextArea,
  ClearFormInputButton,
  ValidationErrorText,
} from './FormTextArea.styled';

const FormTextArea = props => {
  const { text, field, value = '', error = '' } = props;

  const [fieldData, setFieldData] = useState(value);

  const inputHandler = e => {
    setFieldData(e.target.value);
    field?.onChange(e.target.value);
  };

  const inputCleaner = () => {
    setFieldData('');
    field?.onChange('');
  };

  return (
    <FormLabel $error={error}>
      <FormLabelText>{text}</FormLabelText>
      <FormLabelTextArea
        onChange={inputHandler}
        placeholder="Input"
        value={fieldData}
      ></FormLabelTextArea>
      <ClearFormInputButton type="button" onClick={inputCleaner}>
        <IoIosClose size={24} />
      </ClearFormInputButton>
      {error && <ValidationErrorText>{error}</ValidationErrorText>}
    </FormLabel>
  );
};

export default FormTextArea;

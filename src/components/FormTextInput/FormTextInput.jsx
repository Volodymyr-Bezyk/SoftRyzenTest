import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';

import {
  FormLabel,
  FormLabelText,
  FormLabelInput,
  ClearFormInputButton,
  ValidationErrorText,
} from './FormTextInput.styled';

const FormTextInput = props => {
  const {
    children,
    register,
    text,
    fieldName,
    clear = true,
    value = '',
    showInput = true,
    error = '',
    ...other
  } = props;

  const [fieldData, setFieldData] = useState(value);

  console.log('register', register);

  return (
    <FormLabel $error={error}>
      <FormLabelText>{text}</FormLabelText>
      {showInput && (
        <FormLabelInput
          {...other}
          type="text"
          {...register(`${fieldName}`)}
          placeholder="Input"
          value={fieldData}
          onChange={e => setFieldData(e.target.value)}
        />
      )}
      {clear && (
        <ClearFormInputButton type="button">
          <IoIosClose size={24} />
        </ClearFormInputButton>
      )}
      {error && <ValidationErrorText>{error}</ValidationErrorText>}
      {children}
    </FormLabel>
  );
};

export default FormTextInput;

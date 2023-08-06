import { useState, useEffect, useRef } from 'react';
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
    field,
    text,
    fieldName,
    clear = true,
    value = '',
    showInput = true,
    error = '',
    ...other
  } = props;

  const [fieldData, setFieldData] = useState(value ?? '');
  const firstRender = useRef(true);

  useEffect(() => {
    if (value && firstRender.current) {
      setFieldData(value);
      field?.onChange(value);
      firstRender.current = false;
    }
  }, [field, value]);

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
      {showInput && (
        <FormLabelInput
          {...other}
          type="text"
          placeholder="Input"
          value={fieldData}
          onChange={inputHandler}
        />
      )}
      {clear && (
        <ClearFormInputButton type="button" onClick={inputCleaner}>
          <IoIosClose size={24} />
        </ClearFormInputButton>
      )}
      {error && <ValidationErrorText>{error}</ValidationErrorText>}
      {children}
    </FormLabel>
  );
};

export default FormTextInput;

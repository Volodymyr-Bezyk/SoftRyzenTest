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
    // value = '',
    showInput = true,
    ...other
  } = props;

  return (
    <FormLabel>
      <FormLabelText>{text}</FormLabelText>
      {showInput && (
        <FormLabelInput
          {...other}
          type="text"
          {...register(`${fieldName}`, { required: true })}
          placeholder="Input"
        />
      )}
      {clear && (
        <ClearFormInputButton type="button">
          <IoIosClose size={24} />
        </ClearFormInputButton>
      )}
      {clear && <ValidationErrorText>invalid input </ValidationErrorText>}
      {children}
    </FormLabel>
  );
};

export default FormTextInput;

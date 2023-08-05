import { IoIosClose } from 'react-icons/io';

import {
  FormLabel,
  FormLabelText,
  FormLabelTextArea,
  ClearFormInputButton,
  ValidationErrorText,
} from './FormTextArea.styled';

const FormTextArea = props => {
  const { register, text, fieldName, error = '' } = props;

  return (
    <FormLabel $error={error}>
      <FormLabelText>{text}</FormLabelText>
      <FormLabelTextArea
        {...register(`${fieldName}`, { required: true })}
        placeholder="Input"
      ></FormLabelTextArea>
      <ClearFormInputButton type="button">
        <IoIosClose size={24} />
      </ClearFormInputButton>
      {error && <ValidationErrorText>{error}</ValidationErrorText>}
    </FormLabel>
  );
};

export default FormTextArea;

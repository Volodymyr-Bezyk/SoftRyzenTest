import { IoIosClose } from 'react-icons/io';

import {
  FormLabel,
  FormLabelText,
  FormLabelTextArea,
  ClearFormInputButton,
  ValidationErrorText,
} from './FormTextArea.styled';

const FormTextArea = props => {
  const { register, text, fieldName } = props;

  return (
    <FormLabel>
      <FormLabelText>{text}</FormLabelText>
      <FormLabelTextArea
        {...register(`${fieldName}`, { required: true })}
        placeholder="Input"
      ></FormLabelTextArea>
      <ClearFormInputButton type="button">
        <IoIosClose size={24} />
      </ClearFormInputButton>
      <ValidationErrorText>invalid input</ValidationErrorText>
    </FormLabel>
  );
};

export default FormTextArea;

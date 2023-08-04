import Select from 'react-select';

import {
  FormLabel,
  FormLabelText,
  ValidationErrorText,
} from './FormSelect.styled';

const selectStyles = {
  container: (provided, state) => ({
    ...provided,
    outline: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: 16,
    color: state.isSelected ? 'white' : '#3F3F3F',
    backgroundColor: state.isSelected ? '#7B61FF' : 'white',
  }),
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    height: '56px',
    display: 'flex',
    alignContent: 'center',
    padding: '16px 12px',
    fontSize: 16,
    border: state.isFocused ? '1px solid #6243FF' : '1px solid #ACA7C3',
    borderRadius: '8px',
    transition: 'color 250ms ease-in-out, border-color 250ms ease-in-out',
    boxShadow: 'none',

    '&:hover, &:focus ': {
      borderColor: '#6243FF',
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused ? '#6243FF' : '#ACA7C3',
    '&:hover, &:focus ': {
      color: '#6243FF',
    },
  }),
  indicatorsContainer: provided => ({
    ...provided,
    cursor: 'pointer',
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
};

const FormSelect = props => {
  const { options } = props;

  return (
    <FormLabel>
      <FormLabelText>Category</FormLabelText>

      <Select
        options={options}
        styles={selectStyles}
        placeholder="Choose category"
      />
      <ValidationErrorText>invalid input</ValidationErrorText>
    </FormLabel>
  );
};

export default FormSelect;

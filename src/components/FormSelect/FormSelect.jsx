import { useState } from 'react';
import Select from 'react-select';

import {
  FormLabel,
  FormLabelText,
  ValidationErrorText,
} from './FormSelect.styled';

const FormSelect = props => {
  const [selectOpen, setSelectOpen] = useState(false);
  const { options, field } = props;

  return (
    <FormLabel>
      <FormLabelText>Category</FormLabelText>

      <Select
        onChange={field?.onChange}
        menuIsOpen={selectOpen}
        onMenuOpen={() => setSelectOpen(true)}
        onMenuClose={() => setSelectOpen(false)}
        options={options}
        styles={{
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
            transition:
              'color 250ms ease-in-out, border-color 250ms ease-in-out',
            boxShadow: 'none',

            '&:hover, &:focus ': {
              borderColor: '#6243FF',
            },
          }),
          dropdownIndicator: (provided, state) => ({
            ...provided,

            transform: selectOpen ? 'rotateX(180deg)' : 'rotateX(0)',
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
          placeholder: (provided, state) => ({
            ...provided,
            color: state.isFocused ? '#7B61FF' : '#ACA7C3',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 1.5,
          }),
        }}
        placeholder="Input"
      />
      <ValidationErrorText>invalid input</ValidationErrorText>
    </FormLabel>
  );
};

export default FormSelect;

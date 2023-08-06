import { useState, useEffect, useRef } from 'react';
import Select from 'react-select';

import {
  FormLabel,
  FormLabelText,
  ValidationErrorText,
} from './FormSelect.styled';

const FormSelect = props => {
  const { options, field, title, error = '', value = '' } = props;
  const [selectOpen, setSelectOpen] = useState(false);
  const [defaultValue, setDefaultValue] = useState();
  const firstRender = useRef(true);

  useEffect(() => {
    if (value && firstRender.current) {
      setDefaultValue(value);
      field?.onChange(value);
      firstRender.current = false;
    }
  }, [field, value]);

  const selectHandler = option => {
    setDefaultValue(option);
    field?.onChange(option);
  };

  return (
    <FormLabel>
      <FormLabelText>{title}</FormLabelText>

      <Select
        value={defaultValue}
        onChange={selectHandler}
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

            borderRadius: '8px',
            transition:
              'color 250ms ease-in-out, border-color 250ms ease-in-out',
            boxShadow: 'none',
            border: state.isFocused
              ? '1px solid #6243FF'
              : error
              ? '1px solid #FF2B77'
              : '1px solid #ACA7C3',

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
      {error && <ValidationErrorText>{error}</ValidationErrorText>}
    </FormLabel>
  );
};

export default FormSelect;

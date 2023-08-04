import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { IoIosClose } from 'react-icons/io';
import BackLink from 'components/BackLink';
import PageContentWrapperWithTitle from 'components/PageContentWrapperWithTitle';
import {
  FormWrap,
  FormInnerDelimeter,
  FormLabel,
  FormLabelText,
  FormLabelInput,
  FormLabelTextArea,
  AddEventButton,
  ClearFormInputButton,
  ValidationErrorText,
} from './NewEvent.styled';

import { filterOptions } from 'constants/filterListOptions';
import { priorityOptions } from 'constants/priorityOptions';

const NewEvent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  const customStyles = {
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

  return (
    <>
      <BackLink />
      <PageContentWrapperWithTitle title="Create new event">
        <FormWrap>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInnerDelimeter>
              <FormLabel>
                <FormLabelText>Title</FormLabelText>
                <FormLabelInput
                  type="text"
                  {...register('title', { required: true })}
                />
                <ClearFormInputButton type="button">
                  <IoIosClose size={24} />
                </ClearFormInputButton>
                <ValidationErrorText>invalid input </ValidationErrorText>
              </FormLabel>

              <FormLabel>
                <FormLabelText>Description</FormLabelText>
                <FormLabelTextArea
                  {...register('description', { required: true })}
                ></FormLabelTextArea>
                <ClearFormInputButton type="button">
                  <IoIosClose size={24} />
                </ClearFormInputButton>
                <ValidationErrorText>invalid input</ValidationErrorText>
              </FormLabel>

              <FormLabel>
                <FormLabelText>Select date</FormLabelText>
                <FormLabelInput
                  type="date"
                  {...register('date', { required: true })}
                />
                <ValidationErrorText>invalid input</ValidationErrorText>
              </FormLabel>

              <FormLabel>
                <FormLabelText>Select time</FormLabelText>
                <FormLabelInput
                  type="time"
                  {...register('time', { required: true })}
                />
                <ValidationErrorText>invalid input</ValidationErrorText>
              </FormLabel>

              <FormLabel>
                <FormLabelText>Location</FormLabelText>
                <FormLabelInput
                  type="text"
                  {...register('location', { required: true })}
                />
                <ClearFormInputButton type="button">
                  <IoIosClose size={24} />
                </ClearFormInputButton>
                <ValidationErrorText>invalid input</ValidationErrorText>
              </FormLabel>

              <FormLabel>
                <FormLabelText>Category</FormLabelText>

                <Select
                  options={filterOptions}
                  styles={customStyles}
                  placeholder="Choose category"
                />
                <ValidationErrorText>invalid input</ValidationErrorText>
              </FormLabel>

              <FormLabel>
                <FormLabelText>Add picture</FormLabelText>
                <FormLabelInput
                  type="text"
                  {...register('picture', { required: true })}
                />
                <ClearFormInputButton type="button">
                  <IoIosClose size={24} />
                </ClearFormInputButton>
                <ValidationErrorText>invalid input</ValidationErrorText>
              </FormLabel>

              <FormLabel>
                <FormLabelText>Priority</FormLabelText>
                <Select
                  options={priorityOptions}
                  styles={customStyles}
                  placeholder="Choose priority"
                />
                <ValidationErrorText>invalid input</ValidationErrorText>
              </FormLabel>
            </FormInnerDelimeter>

            <AddEventButton type="submit">Add event</AddEventButton>
          </form>
        </FormWrap>
      </PageContentWrapperWithTitle>
    </>
  );
};

export default NewEvent;

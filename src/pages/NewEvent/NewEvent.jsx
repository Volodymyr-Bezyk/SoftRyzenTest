import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { IoIosClose } from 'react-icons/io';
import BackLink from 'components/BackLink';
import PageContentWrapperWithTitle from 'components/PageContentWrapperWithTitle';
import {
  FormWrap,
  FormInnerDelimeter,
  Formlabel,
  FormLabelText,
  FormLabelInput,
  FormLabelTextArea,
  FormLabelSelect,
  AddEventButton,
  ClearFormInputButton,
  ValidationErrorText,
} from './NewEvent.styled';

const NewEvent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  const options = [
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Low', label: 'Low' },
  ];

  return (
    <>
      <BackLink />
      <PageContentWrapperWithTitle title="Create new event">
        <FormWrap>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInnerDelimeter>
              <Formlabel>
                <FormLabelText>Title</FormLabelText>
                <FormLabelInput
                  type="text"
                  {...register('title', { required: true })}
                />
                <ClearFormInputButton type="button">
                  <IoIosClose size={24} />
                </ClearFormInputButton>
                <ValidationErrorText>invalid input </ValidationErrorText>
              </Formlabel>

              <Formlabel>
                <FormLabelText>Description</FormLabelText>
                <FormLabelTextArea
                  {...register('description', { required: true })}
                ></FormLabelTextArea>
                <ClearFormInputButton type="button">
                  <IoIosClose size={24} />
                </ClearFormInputButton>
                <ValidationErrorText>invalid input</ValidationErrorText>
              </Formlabel>

              <Formlabel>
                <FormLabelText>Select date</FormLabelText>
                <FormLabelInput
                  type="date"
                  {...register('date', { required: true })}
                />
                <ValidationErrorText>invalid input</ValidationErrorText>
              </Formlabel>

              <Formlabel>
                <FormLabelText>Select time</FormLabelText>
                <FormLabelInput
                  type="time"
                  {...register('time', { required: true })}
                />
                <ValidationErrorText>invalid input</ValidationErrorText>
              </Formlabel>

              <Formlabel>
                <FormLabelText>Location</FormLabelText>
                <FormLabelInput
                  type="text"
                  {...register('location', { required: true })}
                />
                <ClearFormInputButton type="button">
                  <IoIosClose size={24} />
                </ClearFormInputButton>
                <ValidationErrorText>invalid input</ValidationErrorText>
              </Formlabel>

              <Formlabel>
                <FormLabelText>Category</FormLabelText>
                <Select options={options} />
                {/* <FormLabelSelect {...register('category')}>
                  <option value={'High'}>High</option>
                  <option value={'Medium'}>Medium</option>
                  <option value={'Low'}>Low</option>
                </FormLabelSelect> */}
                <ValidationErrorText>invalid input</ValidationErrorText>
              </Formlabel>

              <Formlabel>
                <FormLabelText>Add picture</FormLabelText>
                <FormLabelInput
                  type="text"
                  {...register('picture', { required: true })}
                />
                <ClearFormInputButton type="button">
                  <IoIosClose size={24} />
                </ClearFormInputButton>
                <ValidationErrorText>invalid input</ValidationErrorText>
              </Formlabel>

              <Formlabel>
                <FormLabelText>Priority</FormLabelText>
                <FormLabelSelect {...register('priority')}>
                  <option value={'Art'}>Art</option>
                  <option value={'Business'}>Business</option>
                  <option value={'Party'}>Party</option>
                </FormLabelSelect>
                <ValidationErrorText>invalid input</ValidationErrorText>
              </Formlabel>
            </FormInnerDelimeter>

            <AddEventButton type="submit">Add event</AddEventButton>
          </form>
        </FormWrap>
      </PageContentWrapperWithTitle>
    </>
  );
};

export default NewEvent;

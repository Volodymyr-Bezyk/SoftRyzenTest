import { useForm } from 'react-hook-form';

import BackLink from 'components/BackLink';
import PageContentWrapperWithTitle from 'components/PageContentWrapperWithTitle';
import {
  FormWrap,
  FormInnerDelimeter,
  FormLabel,
  FormLabelText,
  // FormLabelInput,
  // FormLabelTextArea,
  AddEventButton,
  // ClearFormInputButton,
  ValidationErrorText,
} from './NewEvent.styled';

import { filterOptions } from 'constants/filterListOptions';
import { priorityOptions } from 'constants/priorityOptions';

import FormTextInput from 'components/FormTextInput';
import Calendar from 'components/Calendar';
import FormSelect from 'components/FormSelect';
import FormTextArea from 'components/FormTextArea';

const NewEvent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <>
      <BackLink />
      <PageContentWrapperWithTitle title="Create new event">
        <FormWrap>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInnerDelimeter>
              <FormTextInput
                register={register}
                text="Title"
                fieldName="title"
              />

              <FormTextArea
                register={register}
                text="Description"
                fieldName="description"
              />

              <Calendar />

              <FormLabel>
                <FormLabelText>Select time</FormLabelText>
                <ValidationErrorText>invalid input</ValidationErrorText>
              </FormLabel>

              <FormTextInput
                register={register}
                text="Location"
                fieldName="location"
              />

              <FormSelect options={filterOptions} />

              <FormTextInput
                register={register}
                text="Add picture"
                fieldName="picture"
              />

              <FormSelect options={priorityOptions} />
            </FormInnerDelimeter>

            <AddEventButton type="submit">Add event</AddEventButton>
          </form>
        </FormWrap>
      </PageContentWrapperWithTitle>
    </>
  );
};

export default NewEvent;

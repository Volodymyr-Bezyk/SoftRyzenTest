import { useForm, Controller } from 'react-hook-form';

import BackLink from 'components/BackLink';
import PageContentWrapperWithTitle from 'components/PageContentWrapperWithTitle';
import {
  FormWrap,
  FormInnerDelimeter,
  AddEventButton,
} from './NewEvent.styled';

import { filterOptions } from 'constants/filterListOptions';
import { priorityOptions } from 'constants/priorityOptions';

import FormTextInput from 'components/FormTextInput';
import Calendar from 'components/Calendar';
import FormSelect from 'components/FormSelect';
import FormTextArea from 'components/FormTextArea';
import Clock from 'components/Clock';

const NewEvent = () => {
  const {
    register,
    handleSubmit,
    control,
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

              <Controller
                name="date"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => <Calendar field={field} />}
              />

              <Controller
                name="time"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => <Clock field={field} />}
              />

              <FormTextInput
                register={register}
                text="Location"
                fieldName="location"
              />

              <Controller
                name="category"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <FormSelect options={filterOptions} field={field} />
                )}
              />

              <FormTextInput
                register={register}
                text="Add picture"
                fieldName="picture"
              />

              <Controller
                name="priority"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <FormSelect options={priorityOptions} field={field} />
                )}
              />

              {/* <FormSelect options={priorityOptions} /> */}
            </FormInnerDelimeter>

            <AddEventButton type="submit">Add event</AddEventButton>
          </form>
        </FormWrap>
      </PageContentWrapperWithTitle>
    </>
  );
};

export default NewEvent;

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import BackLink from 'components/BackLink';
import PageContentWrapperWithTitle from 'components/PageContentWrapperWithTitle';
import {
  FormWrap,
  FormInnerDelimeter,
  AddEventButton,
} from './NewEvent.styled';

import FormTextInput from 'components/FormTextInput';
import Calendar from 'components/Calendar';
import FormSelect from 'components/FormSelect';
import FormTextArea from 'components/FormTextArea';
import Clock from 'components/Clock';

import { filterOptions } from 'constants/filterListOptions';
import { priorityOptions } from 'constants/priorityOptions';
import { validationSchema } from 'validationSchema/validationSchema';

const NewEvent = () => {
  const {
    register,
    handleSubmit,
    control,

    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      title: '',
      location: '',
      picture: '',
    },
  });

  const onSubmit = data => console.log(data);
  // console.log('err', errors);

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
                error={errors?.title?.message}
              />

              <FormTextArea
                register={register}
                text="Description"
                fieldName="description"
                error={errors?.description?.message}
              />

              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <Calendar field={field} error={errors?.date?.message} />
                )}
              />

              <Controller
                name="time"
                control={control}
                render={({ field }) => (
                  <Clock field={field} error={errors?.time?.message} />
                )}
              />

              <FormTextInput
                register={register}
                text="Location"
                fieldName="location"
                error={errors?.location?.message}
              />

              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <FormSelect
                    options={filterOptions}
                    field={field}
                    title="Category"
                    error={errors?.category?.message}
                  />
                )}
              />

              <FormTextInput
                register={register}
                text="Add picture"
                fieldName="picture"
                error={errors?.picture?.message}
              />

              <Controller
                name="priority"
                control={control}
                render={({ field }) => (
                  <FormSelect
                    options={priorityOptions}
                    field={field}
                    title="Priority"
                    error={errors?.priority?.message}
                  />
                )}
              />
            </FormInnerDelimeter>

            <AddEventButton type="submit">Add event</AddEventButton>
          </form>
        </FormWrap>
      </PageContentWrapperWithTitle>
    </>
  );
};

export default NewEvent;

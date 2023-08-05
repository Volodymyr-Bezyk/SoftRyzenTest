import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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
    handleSubmit,
    control,

    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      title: '',
      location: '',
      picture: '',
    },
  });

  const onSubmit = data => console.log(data);

  return (
    <>
      <BackLink />
      <PageContentWrapperWithTitle title="Create new event">
        <FormWrap>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInnerDelimeter>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <FormTextInput
                    field={field}
                    error={errors?.title?.message}
                    text="Title"
                  />
                )}
              />

              {/* <FormTextInput
                register={register}
                text="Title"
                fieldName="title"
                error={errors?.title?.message}
              /> */}

              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <FormTextArea
                    field={field}
                    error={errors?.description?.message}
                    text="Description"
                  />
                )}
              />

              {/* <FormTextArea
                register={register}
                text="Description"
                fieldName="description"
                error={errors?.description?.message}
              /> */}

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

              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <FormTextInput
                    field={field}
                    error={errors?.location?.message}
                    text="Location"
                  />
                )}
              />

              {/* <FormTextInput
                register={register}
                text="Location"
                fieldName="location"
                error={errors?.location?.message}
              /> */}

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

              <Controller
                name="picture"
                control={control}
                render={({ field }) => (
                  <FormTextInput
                    field={field}
                    error={errors?.picture?.message}
                    text="Add picture"
                  />
                )}
              />
              {/* 
              <FormTextInput
                register={register}
                text="Add picture"
                fieldName="picture"
                error={errors?.picture?.message}
              /> */}

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

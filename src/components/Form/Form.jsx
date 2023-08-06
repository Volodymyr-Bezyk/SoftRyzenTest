import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormTextInput from 'components/FormTextInput';
import Calendar from 'components/Calendar';
import FormSelect from 'components/FormSelect';
import FormTextArea from 'components/FormTextArea';
import Clock from 'components/Clock';

import { filterOptions } from 'constants/filterListOptions';
import { priorityOptions } from 'constants/priorityOptions';
import { validationSchema } from 'validationSchema/validationSchema';
import { createEvent } from 'utils/createEvent';

import { FormWrap, FormInnerDelimeter, AddEventButton } from './Form.styled';

const Form = page => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    reset,
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

  const onSubmit = async data => {
    if (page === 'newEvent') {
      await createEvent(data);
    }

    navigate('/', { replace: true });
    reset({ ...data });
  };
  return (
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
  );
};

export default Form;

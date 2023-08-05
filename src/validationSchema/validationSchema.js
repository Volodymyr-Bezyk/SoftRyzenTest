import * as yup from 'yup';

export const validationSchema = yup.object({
  title: yup.string().required().min(5).max(20),

  description: yup.string().required().min(10).max(150),

  //   date: yup.object().required(),
  date: yup.string().required(),
  time: yup.object().required(),

  location: yup.string().required().min(4).max(20),

  picture: yup.string().url().nullable(),
  category: yup.object().required(),
  priority: yup.object().required(),
});

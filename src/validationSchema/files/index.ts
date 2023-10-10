import * as yup from 'yup';

export const fileValidationSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  size: yup.number().integer().required(),
  upload_date: yup.date().required(),
  path: yup.string().required(),
  exam_id: yup.string().nullable().required(),
});

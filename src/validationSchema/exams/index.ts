import * as yup from 'yup';

export const examValidationSchema = yup.object().shape({
  date: yup.date().required(),
  type: yup.string().required(),
  result: yup.string().required(),
  notes: yup.string().required(),
  patient_id: yup.string().nullable().required(),
  doctor_id: yup.string().nullable().required(),
});

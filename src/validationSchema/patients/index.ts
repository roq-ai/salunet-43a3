import * as yup from 'yup';

export const patientValidationSchema = yup.object().shape({
  date_of_birth: yup.date().required(),
  gender: yup.string().required(),
  address: yup.string().required(),
  phone: yup.string().required(),
  emergency_contact: yup.string().required(),
  user_id: yup.string().nullable().required(),
});

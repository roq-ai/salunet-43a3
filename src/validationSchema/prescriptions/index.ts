import * as yup from 'yup';

export const prescriptionValidationSchema = yup.object().shape({
  date: yup.date().required(),
  medicine: yup.string().required(),
  dosage: yup.string().required(),
  duration: yup.string().required(),
  patient_id: yup.string().nullable().required(),
  doctor_id: yup.string().nullable().required(),
});

import { PatientInterface } from 'interfaces/patient';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PrescriptionInterface {
  id?: string;
  patient_id: string;
  doctor_id: string;
  date: any;
  medicine: string;
  dosage: string;
  duration: string;
  created_at?: any;
  updated_at?: any;

  patient?: PatientInterface;
  user?: UserInterface;
  _count?: {};
}

export interface PrescriptionGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  doctor_id?: string;
  medicine?: string;
  dosage?: string;
  duration?: string;
}

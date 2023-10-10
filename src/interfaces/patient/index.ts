import { ExamInterface } from 'interfaces/exam';
import { PrescriptionInterface } from 'interfaces/prescription';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  user_id: string;
  date_of_birth: any;
  gender: string;
  address: string;
  phone: string;
  emergency_contact: string;
  created_at?: any;
  updated_at?: any;
  exam?: ExamInterface[];
  prescription?: PrescriptionInterface[];
  user?: UserInterface;
  _count?: {
    exam?: number;
    prescription?: number;
  };
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  gender?: string;
  address?: string;
  phone?: string;
  emergency_contact?: string;
}

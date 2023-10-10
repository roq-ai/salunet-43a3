import { FileInterface } from 'interfaces/file';
import { PatientInterface } from 'interfaces/patient';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ExamInterface {
  id?: string;
  patient_id: string;
  doctor_id: string;
  date: any;
  type: string;
  result: string;
  notes: string;
  created_at?: any;
  updated_at?: any;
  file?: FileInterface[];
  patient?: PatientInterface;
  user?: UserInterface;
  _count?: {
    file?: number;
  };
}

export interface ExamGetQueryInterface extends GetQueryInterface {
  id?: string;
  patient_id?: string;
  doctor_id?: string;
  type?: string;
  result?: string;
  notes?: string;
}

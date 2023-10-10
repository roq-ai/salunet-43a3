import { ExamInterface } from 'interfaces/exam';
import { GetQueryInterface } from 'interfaces';

export interface FileInterface {
  id?: string;
  exam_id: string;
  name: string;
  type: string;
  size: number;
  upload_date: any;
  path: string;
  created_at?: any;
  updated_at?: any;

  exam?: ExamInterface;
  _count?: {};
}

export interface FileGetQueryInterface extends GetQueryInterface {
  id?: string;
  exam_id?: string;
  name?: string;
  type?: string;
  path?: string;
}

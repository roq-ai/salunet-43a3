import queryString from 'query-string';
import { ExamInterface, ExamGetQueryInterface } from 'interfaces/exam';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getExams = async (query?: ExamGetQueryInterface): Promise<PaginatedInterface<ExamInterface>> => {
  return fetcher('/api/exams', {}, query);
};

export const createExam = async (exam: ExamInterface) => {
  return fetcher('/api/exams', { method: 'POST', body: JSON.stringify(exam) });
};

export const updateExamById = async (id: string, exam: ExamInterface) => {
  return fetcher(`/api/exams/${id}`, { method: 'PUT', body: JSON.stringify(exam) });
};

export const getExamById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/exams/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteExamById = async (id: string) => {
  return fetcher(`/api/exams/${id}`, { method: 'DELETE' });
};

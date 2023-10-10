import queryString from 'query-string';
import { PrescriptionInterface, PrescriptionGetQueryInterface } from 'interfaces/prescription';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPrescriptions = async (
  query?: PrescriptionGetQueryInterface,
): Promise<PaginatedInterface<PrescriptionInterface>> => {
  return fetcher('/api/prescriptions', {}, query);
};

export const createPrescription = async (prescription: PrescriptionInterface) => {
  return fetcher('/api/prescriptions', { method: 'POST', body: JSON.stringify(prescription) });
};

export const updatePrescriptionById = async (id: string, prescription: PrescriptionInterface) => {
  return fetcher(`/api/prescriptions/${id}`, { method: 'PUT', body: JSON.stringify(prescription) });
};

export const getPrescriptionById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/prescriptions/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deletePrescriptionById = async (id: string) => {
  return fetcher(`/api/prescriptions/${id}`, { method: 'DELETE' });
};

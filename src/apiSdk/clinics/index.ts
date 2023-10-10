import queryString from 'query-string';
import { ClinicInterface, ClinicGetQueryInterface } from 'interfaces/clinic';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getClinics = async (query?: ClinicGetQueryInterface): Promise<PaginatedInterface<ClinicInterface>> => {
  return fetcher('/api/clinics', {}, query);
};

export const createClinic = async (clinic: ClinicInterface) => {
  return fetcher('/api/clinics', { method: 'POST', body: JSON.stringify(clinic) });
};

export const updateClinicById = async (id: string, clinic: ClinicInterface) => {
  return fetcher(`/api/clinics/${id}`, { method: 'PUT', body: JSON.stringify(clinic) });
};

export const getClinicById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/clinics/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteClinicById = async (id: string) => {
  return fetcher(`/api/clinics/${id}`, { method: 'DELETE' });
};

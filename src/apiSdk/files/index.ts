import queryString from 'query-string';
import { FileInterface, FileGetQueryInterface } from 'interfaces/file';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFiles = async (query?: FileGetQueryInterface): Promise<PaginatedInterface<FileInterface>> => {
  return fetcher('/api/files', {}, query);
};

export const createFile = async (file: FileInterface) => {
  return fetcher('/api/files', { method: 'POST', body: JSON.stringify(file) });
};

export const updateFileById = async (id: string, file: FileInterface) => {
  return fetcher(`/api/files/${id}`, { method: 'PUT', body: JSON.stringify(file) });
};

export const getFileById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/files/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteFileById = async (id: string) => {
  return fetcher(`/api/files/${id}`, { method: 'DELETE' });
};

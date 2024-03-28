import axios, { AxiosResponse } from 'axios';

import { config } from '../lib/config';
import { IApiRequestParams } from '../types';

export const APIInstance = axios.create({
  timeout: 30000,
  baseURL: config?.urls.API,
});

export const apiGet = <D>({
  url,
  baseURL,
  headers,
  responseType,
}: Omit<IApiRequestParams, 'payload'>) => APIInstance.get<D, AxiosResponse<D>>(url, { responseType, baseURL, headers });

export const apiDelete = <D>({
  url,
  baseURL,
  headers,
}: Omit<IApiRequestParams, 'payload'>) => APIInstance.delete<D, AxiosResponse<D>>(url, { baseURL, headers });

export const apiPost = <D, P>({
  url,
  payload,
  baseURL,
  headers,
}: IApiRequestParams<P>) => APIInstance.post<D, AxiosResponse<D, P>, P>(url, payload, { baseURL, headers });

export const apiPatch = <D, P>({
  url,
  payload,
  baseURL,
  headers,
}: IApiRequestParams<P>) => APIInstance.patch<D, AxiosResponse<D, P>, P>(url, payload, { baseURL, headers });

export const apiPut = <D, P>({
  url,
  payload,
  baseURL,
  headers,
}: IApiRequestParams<P>) => APIInstance.put<D, AxiosResponse<D, P>, P>(url, payload, { baseURL, headers });

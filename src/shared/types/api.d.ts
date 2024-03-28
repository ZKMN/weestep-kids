import { RawAxiosRequestHeaders, ResponseType } from 'axios';
import { SWRConfiguration } from 'swr';

export interface IApiRequestParams<P = undefined> {
  url: string;
  baseURL?: string;
  payload?: P;
  headers?: RawAxiosRequestHeaders;
  responseType?: ResponseType;
}

export interface IApiHookRequestParams {
  url?: string;
  baseURL?: string;
  config?: SWRConfiguration;
  queryParams?: StringifiableRecord;
}

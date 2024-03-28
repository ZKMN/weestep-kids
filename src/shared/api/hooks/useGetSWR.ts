import { AxiosError } from 'axios';
import useSWR, { Fetcher } from 'swr';

import { addQueryParamsToURL } from '@/shared/lib/helpers';
import { useTypedParams } from '@/shared/lib/hooks';
import { IApiHookRequestParams } from '@/shared/types';

import { apiGet } from '../instance';

export const useGetSWR = <R>({ url, config, queryParams }: IApiHookRequestParams) => {
  const { lng } = useTypedParams();

  const fetcher: Fetcher<R, string> = async (u) => {
    const { data } = await apiGet<R>({ url: u });

    return data;
  };

  const urlWithParams = addQueryParamsToURL(`${lng}/v1${url}` as string, queryParams);

  const response = useSWR<R, AxiosError>(urlWithParams, fetcher, config);

  return response;
};

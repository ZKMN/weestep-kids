import { ApolloError } from '@apollo/client';

export interface IHookOptionsParams {
  onError?: (error?: ApolloError) => void;
  onSuccess?: <T>(data?: T) => void;
}

export interface IRoutePathParams {
  [key: string]: string;
  lng: TLanguages;
}

export interface INextPageParams<S = undefined> {
  params: IRoutePathParams;
  searchParams?: S;
}

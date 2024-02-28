import { TStorage } from '@/shared/types';

import { config } from '../config';

export const getParsedStorage = (): TStorage => {
  const appState = typeof window !== 'undefined' && sessionStorage.getItem(String(config?.storageKeyName));

  const parsedAppState = appState && JSON.parse(appState);

  return parsedAppState || {};
};

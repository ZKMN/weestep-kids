import { create } from 'zustand';

import { getParsedStorage } from '@/shared/lib/helpers';
import { IAuthStore } from '@/shared/types';

export const appAuthStoreValues: Readonly<IAuthStore> = {
  email: '',
  authData: undefined,
  isLoggedIn: false,
  sendCodeOnMailRes: undefined,
  isRegistrationRequired: false,
};

export const appAuthStore = create<IAuthStore>()(() => {
  const storage = getParsedStorage();

  return {
    ...appAuthStoreValues,
    authData: storage?.authData,
  };
});

import { create } from 'zustand';

import { getParsedStorage } from '@/shared/lib/helpers';
import { IUserInfoStore } from '@/shared/types';

export const appManagementStoreValues: Readonly<IUserInfoStore> = {
  unAuthProducts: null,
};

export const appManagementStore = create<IUserInfoStore>()(() => {
  const storage = getParsedStorage();

  return {
    ...appManagementStoreValues,
    unAuthProducts: storage?.unAuthProducts || [],
  };
});

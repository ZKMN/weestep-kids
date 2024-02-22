export interface IUserInfoStore {
  unAuthProducts: Record<string, unknown>[] | null;
}

export interface IUserInfoStoreActions {
  setUnAuthProductsAction: (data: Record<string, unknown>[] | null) => void;
}

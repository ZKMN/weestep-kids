import { IAuthStore, IUserInfoStore } from './store';

export type TStorage = { authData?: IAuthStore['authData']; } & IUserInfoStore;

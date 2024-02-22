import dayjs from 'dayjs';

import { IAuthActions, IAuthStore } from '@/shared/types';

import { appAuthStore } from './appAuthStore';

import { handleOverrideStorage } from '../../handlers';

export const setEmailAction: IAuthActions['setEmailAction'] = (email) => appAuthStore.setState({
  email,
});

export const setAuthDataSuccessAction: IAuthActions['setAuthDataSuccessAction'] = (authData) => appAuthStore.setState({
  authData,
});

export const sendCodeOnMailSuccessAction: IAuthActions['sendCodeOnMailSuccessAction'] = (data) => appAuthStore.setState({
  sendCodeOnMailRes: data,
});

export const registrationRequiredAction: IAuthActions['registrationRequiredAction'] = () => appAuthStore.setState({
  isRegistrationRequired: true,
});

export const logInSucessAction: IAuthActions['logInSucessAction'] = () => {
  appAuthStore.setState((state) => {
    const expiredDate = state.authData?.expiredDate || dayjs().add(30, 'days').format('MM/DD/YYYY');

    const newAuthData = { ...state.authData, expiredDate } as IAuthStore['authData'];

    handleOverrideStorage({ authData: newAuthData });

    return {
      email: '',
      authData: newAuthData,
      isLoggedIn: true,
      sendCodeOnMailRes: undefined,
      isRegistrationRequired: false,
    };
  });
};

export const resetAuthStoreAction: IAuthActions['resetAuthStoreAction'] = () => appAuthStore.setState({
  sendCodeOnMailRes: undefined,
  isRegistrationRequired: false,
});

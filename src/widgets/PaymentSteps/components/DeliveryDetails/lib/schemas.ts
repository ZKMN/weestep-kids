import { matchIsValidTel } from 'mui-tel-input';
import * as Yup from 'yup';

import { validateSpainPostalCode } from './helpers';

export const CUSTOMER_FORM_SCHEMA = Yup.object().shape({
  firstName: Yup.string()
    .required('errors.firstNameRequired')
    .max(50, 'errors.firstNameMax'),
  lastName: Yup.string()
    .required('errors.lastNameRequired')
    .max(50, 'errors.lastNameMax'),
  email: Yup.string()
    .trim()
    .email('errors.emailInvalid')
    .required('errors.emailRequired'),
  phoneNumber: Yup.string()
    .trim()
    .required('errors.phoneNumberRequired')
    .test(
      'phoneNumber',
      'errors.phoneNumberInvalid',
      (phone) => {
        if (phone.startsWith('+34') && (matchIsValidTel(phone, { onlyCountries: ['ES'] }))) {
          return true;
        }

        return false;
      },
    ),
  postalCode: Yup.string()
    .trim()
    .required('errors.postalCodeRequired')
    .test(
      'postalCode',
      'errors.postalCodeInvalid',
      (postalCode) => {
        if (validateSpainPostalCode(postalCode)) {
          return true;
        }

        return false;
      },
    ),
  city: Yup.string()
    .required('errors.cityRequired'),
  street: Yup.string()
    .required('errors.streetRequired'),
  streetNumber: Yup.string()
    .required('errors.streetNumberRequired'),
});

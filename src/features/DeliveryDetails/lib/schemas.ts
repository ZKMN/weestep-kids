import { matchIsValidTel } from 'mui-tel-input';
import * as Yup from 'yup';

export const CUSTOMER_FORM_SCHEMA = Yup.object().shape({
  firstName: Yup.string()
    .required('errors.firstNameRequired')
    .max(50, 'errors.firstNameMax'),
  lastName: Yup.string()
    .max(50, 'errors.lastNameMax'),
  email: Yup.string()
    .email('errors.emailInvalid')
    .required('errors.emailRequired'),
  phoneNumber: Yup.string()
    .trim()
    .required('errors.phoneNumberRequired')
    .test(
      'phoneNumber',
      'errors.phoneNumberIncorrect',
      (phone) => {
        if (!phone || (phone.startsWith('+34') && (matchIsValidTel(phone, { onlyCountries: ['ES'] })))) {
          return true;
        }

        return false;
      },
    ),
});

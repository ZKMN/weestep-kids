import { IFieldProps } from '@/shared/types';

export const CUSTOMER_FIELDS: IFieldProps[] = [{
  type: IFieldProps.type.TEXT,
  name: 'firstName',
  intl: { label: 'labels.firstName' },
  required: true,
  xs: 6,
}, {
  type: IFieldProps.type.TEXT,
  name: 'lastName',
  intl: { label: 'labels.lastName' },
  xs: 6,
}, {
  type: IFieldProps.type.TEXT,
  name: 'email',
  intl: { label: 'labels.email' },
  required: true,
}, {
  type: IFieldProps.type.PHONE_NUMBER,
  name: 'phoneNumber',
  intl: { label: 'labels.phoneNumber' },
  required: true,
}];

export const CUSTOMER_INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
};

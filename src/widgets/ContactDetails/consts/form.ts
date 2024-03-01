import { IFieldProps } from '@/shared/types';

export const FIELDS: IFieldProps[] = [{
  type: IFieldProps.type.TEXT,
  name: 'subject',
  size: 'small',
  intl: { label: 'labels.subject' },
  required: true,
}, {
  type: IFieldProps.type.TEXT,
  name: 'email',
  size: 'small',
  intl: { label: 'labels.email' },
  required: true,
}, {
  type: IFieldProps.type.TEXT,
  name: 'message',
  size: 'small',
  intl: { label: 'labels.message' },
  required: true,
  multiline: true,
  maxRows: 3,
}];

import { IFieldProps } from '@/shared/types';

export const FIELDS: IFieldProps[] = [{
  type: IFieldProps.type.TEXT,
  name: 'subject',
  size: 'small',
  intlLabel: 'labels.subject',
  required: true,
}, {
  type: IFieldProps.type.TEXT,
  name: 'email',
  size: 'small',
  intlLabel: 'labels.email',
  required: true,
}, {
  type: IFieldProps.type.TEXT,
  name: 'message',
  size: 'small',
  intlLabel: 'labels.message',
  required: true,
  multiline: true,
  maxRows: 3,
}];

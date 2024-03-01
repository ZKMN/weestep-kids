'use client';

import { IFieldProps } from '@/shared/types';

import {
  FormInput,
  FormPhoneInput,
} from './Fields';

export const FieldByType = ({ field }: { field: IFieldProps; }) => {
  const {
    size,
    name,
    intl,
    maxRows,
    multiline,
    required,
    disabled,
    placeholder,
    endAdornment,
  } = field;

  switch (field.type) {
    case IFieldProps.type.TEXT:
      return (
        <FormInput
          name={name}
          size={size}
          intl={intl}
          maxRows={maxRows}
          multiline={multiline}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          endAdornment={endAdornment}
        />
      );
    case IFieldProps.type.PHONE_NUMBER:
      return (
        <FormPhoneInput
          name={name}
          size={size}
          intl={intl}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
        />
      );
    default:
      return null;
  }
};

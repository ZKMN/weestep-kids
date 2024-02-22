import { IFieldProps } from '@/shared/types';

import {
  FormInput,
  FormPhoneInput,
} from './Fields';

export const FieldByType = ({ field }: { field: IFieldProps; }) => {
  const {
    name,
    label,
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
          label={label}
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
          label={label}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
        />
      );
    default:
      return null;
  }
};

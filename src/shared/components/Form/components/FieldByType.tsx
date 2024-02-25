import { IFieldProps } from '@/shared/types';

import {
  FormInput,
  FormPhoneInput,
} from './Fields';

export const FieldByType = ({ field }: { field: IFieldProps; }) => {
  const {
    size,
    name,
    maxRows,
    multiline,
    required,
    disabled,
    intlLabel,
    placeholder,
    endAdornment,
  } = field;

  switch (field.type) {
    case IFieldProps.type.TEXT:
      return (
        <FormInput
          name={name}
          size={size}
          maxRows={maxRows}
          multiline={multiline}
          required={required}
          disabled={disabled}
          intlLabel={intlLabel}
          placeholder={placeholder}
          endAdornment={endAdornment}
        />
      );
    case IFieldProps.type.PHONE_NUMBER:
      return (
        <FormPhoneInput
          name={name}
          size={size}
          required={required}
          disabled={disabled}
          intlLabel={intlLabel}
          placeholder={placeholder}
        />
      );
    default:
      return null;
  }
};

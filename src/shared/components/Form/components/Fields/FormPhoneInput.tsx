import { Controller, useFormContext } from 'react-hook-form';
import { Warning } from '@mui/icons-material';
import { styled } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';

import { IFieldProps } from '@/shared/types';

const MuiTelInputStyled = styled(MuiTelInput)`
  & .MuiTelInput-IconButton {
    display: none;
  }
`;

export const FormPhoneInput = ({
  name,
  label,
  required,
  disabled,
  placeholder,
}: Omit<IFieldProps, 'type'>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <MuiTelInputStyled
          fullWidth
          name={field.name}
          color="baseDefault"
          label={label}
          value={field.value || ''}
          error={!!fieldState.error}
          onBlur={field.onBlur}
          onChange={field.onChange}
          inputRef={field.ref}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          helperText={fieldState.error?.message}
          defaultCountry="CA"
          onlyCountries={['US', 'CA']}
          InputProps={{ endAdornment: fieldState.error && <Warning color="error" /> }}
        />
      )}
    />
  );
};

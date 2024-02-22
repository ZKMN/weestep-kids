'use client';

import { Controller, useFormContext } from 'react-hook-form';
import { Warning } from '@mui/icons-material';
import { TextField } from '@mui/material';

import { IFieldProps } from '@/shared/types';

export const FormInput = ({
  name,
  label,
  required,
  disabled,
  placeholder,
  endAdornment,
}: Omit<IFieldProps, 'type'>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          fullWidth
          id={name}
          name={field.name}
          label={label}
          color="baseDefault"
          error={!!fieldState.error}
          value={field.value || ''}
          onBlur={field.onBlur}
          onChange={field.onChange}
          inputRef={field.ref}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          InputProps={{ endAdornment: fieldState.error ? <Warning color="error" /> : endAdornment }}
          InputLabelProps={{ shrink: true }}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

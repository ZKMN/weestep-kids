'use client';

import { Controller, useFormContext } from 'react-hook-form';
import { Warning } from '@mui/icons-material';
import { TextField } from '@mui/material';

import { useClientTranslation } from '@/shared/lib/hooks';
import { IFieldProps } from '@/shared/types';

export const FormInput = ({
  size,
  name,
  maxRows,
  required,
  disabled,
  multiline,
  intlLabel,
  placeholder,
  endAdornment,
}: Omit<IFieldProps, 'type'>) => {
  const { control } = useFormContext();

  const { translate } = useClientTranslation('forms');

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          fullWidth
          id={name}
          size={size}
          name={field.name}
          label={translate(intlLabel)}
          color="primary"
          error={!!fieldState.error}
          value={field.value || ''}
          maxRows={maxRows}
          minRows={maxRows}
          multiline={multiline}
          onBlur={field.onBlur}
          onChange={field.onChange}
          inputRef={field.ref}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          InputProps={{ endAdornment: fieldState.error ? <Warning color="error" /> : endAdornment }}
          helperText={fieldState.error?.message && translate(fieldState.error.message)}
        />
      )}
    />
  );
};

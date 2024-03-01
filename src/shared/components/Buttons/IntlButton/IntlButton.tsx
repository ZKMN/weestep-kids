import React from 'react';
import { Button, ButtonProps } from '@mui/material';

import { useClientTranslation } from '@/shared/lib/hooks';
import { IIntlProps } from '@/shared/types';

export const IntlButton = ({
  sx,
  size,
  intl,
  type,
  color = 'primary',
  variant = 'contained',
  disabled,
  endIcon,
  startIcon,
  onClick,
}: Omit<ButtonProps, 'children'> & IIntlProps) => {
  const { translate } = useClientTranslation('buttons');

  return (
    <Button
      sx={sx}
      size={size}
      type={type}
      color={color}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      endIcon={endIcon}
      startIcon={startIcon}
    >
      {translate(intl.label, intl.values)}
    </Button>
  );
};

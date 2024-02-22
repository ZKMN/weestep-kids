import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

import { useClientTranslation } from '@/shared/lib/hooks';
import { IIntlProps } from '@/shared/types';

export const IntlTypography = ({
  sx,
  intl,
  fontFamily,
  fontSize,
  fontWeight,
}: Omit<TypographyProps, 'children'> & IIntlProps) => {
  const { translate } = useClientTranslation('typography');

  return (
    <Typography
      sx={sx}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {translate(intl.label, intl.values)}
    </Typography>
  );
};

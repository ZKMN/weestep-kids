import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

import { useClientTranslation } from '@/shared/lib/hooks';
import { IIntlProps } from '@/shared/types';

export const IntlTypography = ({
  sx,
  mb,
  intl,
  color,
  variant,
  fontSize,
  component,
  textAlign,
  fontWeight,
  fontFamily,
  textTransform,
}: Omit<TypographyProps, 'children'> & IIntlProps) => {
  const [translate] = useClientTranslation('typography');

  return (
    <Typography
      sx={sx}
      mb={mb}
      color={color}
      variant={variant}
      fontFamily={fontFamily}
      fontSize={fontSize}
      // @ts-ignore
      component={component}
      textAlign={textAlign}
      fontWeight={fontWeight}
      textTransform={textTransform}
    >
      {translate(intl.label, intl.values)}
    </Typography>
  );
};

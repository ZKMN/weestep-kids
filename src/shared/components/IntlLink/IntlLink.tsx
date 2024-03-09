'use client';

import React from 'react';
import { Link, LinkProps } from '@mui/material';

import { useClientTranslation } from '@/shared/lib/hooks';
import { IIntlProps } from '@/shared/types';

export const IntlLink = ({
  sx,
  mb,
  intl,
  href,
  color,
  target = '_blank',
  variant,
  fontSize,
  textAlign,
  fontWeight,
  fontFamily,
  textTransform,
}: Omit<LinkProps, 'children'> & IIntlProps) => {
  const [translate] = useClientTranslation('typography', { keyPrefix: 'links' });

  return (
    <Link
      sx={sx}
      mb={mb}
      href={href}
      color={color}
      target={target}
      variant={variant}
      fontFamily={fontFamily}
      fontSize={fontSize}
      textAlign={textAlign}
      fontWeight={fontWeight}
      textTransform={textTransform}
    >
      {translate(intl.label, intl.values)}
    </Link>
  );
};

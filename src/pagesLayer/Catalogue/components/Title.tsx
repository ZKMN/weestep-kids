'use client';

import React from 'react';
import { Typography } from '@mui/material';

import { useClientTranslation, useMediaSizes } from '@/shared/lib/hooks';

export const Title = () => {
  const { translate } = useClientTranslation('common');

  const { isLessMd, isLessLg } = useMediaSizes();

  let fontSize = '4rem';

  if (isLessLg) {
    fontSize = '3rem';
  }

  if (isLessMd) {
    fontSize = '2rem';
  }

  return (
    <Typography
      color="primary"
      variant="h1"
      fontWeight={600}
      fontSize={fontSize}
    >
      {translate('menu.catalogue')}
    </Typography>
  );
};

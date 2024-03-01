'use client';

import React from 'react';
import { Typography } from '@mui/material';

import { breakpoints } from '@/shared/assets';
import { useClientTranslation } from '@/shared/lib/hooks';

export const Title = () => {
  const [translate] = useClientTranslation('common');

  return (
    <Typography
      color="primary"
      variant="h1"
      fontWeight={600}
      sx={{
        fontSize: '4rem',
        [breakpoints.down('lg')]: {
          fontSize: '3rem',
        },
        [breakpoints.down('md')]: {
          fontSize: '2rem',
        },
      }}
    >
      {translate('menu.catalogue')}
    </Typography>
  );
};

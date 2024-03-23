'use client';

import React from 'react';
import { Typography } from '@mui/material';

import { breakpoints } from '@/shared/assets';
import { useClientTranslation } from '@/shared/lib/hooks';

export const Title = () => {
  const [translate] = useClientTranslation('common');

  return (
    <Typography
      mb={3}
      color="primary"
      variant="h1"
      component="h1"
      fontWeight={600}
      textAlign="center"
      sx={{
        fontSize: '4rem',
        [breakpoints.down('lg')]: {
          fontSize: '3rem',
        },
      }}
    >
      {translate('menu.contacts')}
    </Typography>
  );
};

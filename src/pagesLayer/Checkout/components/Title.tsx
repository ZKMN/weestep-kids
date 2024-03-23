'use client';

import React from 'react';

import { breakpoints } from '@/shared/assets';
import { IntlTypography } from '@/shared/components';

export const Title = () => (
  <IntlTypography
    intl={{ label: 'titles.checkout' }}
    color="primary"
    variant="h1"
    component="h1"
    fontWeight={600}
    textAlign="center"
    sx={{
      mb: 4,
      fontSize: '4rem',
      [breakpoints.down('lg')]: {
        fontSize: '3rem',
      },
      [breakpoints.down('md')]: {
        fontSize: '2rem',
      },
    }}
  />
);

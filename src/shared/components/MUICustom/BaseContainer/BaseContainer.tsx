'use client';

import React, { PropsWithChildren } from 'react';
import { Container, ContainerProps } from '@mui/material';

import { useMediaSizes } from '@/shared/lib/hooks';

export const BaseContainer = ({ sx, disableGutters, children }: PropsWithChildren<ContainerProps>) => {
  const { isBiggerXl } = useMediaSizes();

  return (
    <Container
      sx={{ ...sx, height: '100%', maxWidth: isBiggerXl ? '1500px' : '1366px' }}
      fixed={false}
      maxWidth={false}
      disableGutters={disableGutters || isBiggerXl}
    >
      {children}
    </Container>
  );
};

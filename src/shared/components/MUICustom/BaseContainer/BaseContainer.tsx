'use client';

import React, { PropsWithChildren } from 'react';
import { Container, ContainerProps } from '@mui/material';

import { breakpoints } from '@/shared/assets';

type BaseContainerProps = Omit<ContainerProps, 'maxWidth'> & { pt?: number; maxWidth?: number; };

export const BaseContainer = ({
  pt,
  maxWidth,
  children,
  disableGutters,
}: PropsWithChildren<BaseContainerProps>) => (
  <Container
    sx={{
      pt,
      height: '100%',
      maxWidth: maxWidth || 1366,
      [breakpoints.up('xl')]: {
        maxWidth: maxWidth || 1500,
        padding: 0,
      },
    }}
    fixed={false}
    maxWidth={false}
    disableGutters={disableGutters}
  >
    {children}
  </Container>
);

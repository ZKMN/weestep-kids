'use client';

import React, { PropsWithChildren } from 'react';
import { Container, ContainerProps } from '@mui/material';

type BaseContainerProps = Omit<ContainerProps, 'sx'> & { pt?: number; };

export const BaseContainer = ({ pt, disableGutters, children }: PropsWithChildren<BaseContainerProps>) => (
  <Container
    sx={(theme) => ({
      pt,
      height: '100%',
      maxWidth: '1366px',
      [theme.breakpoints.up('xl')]: {
        maxWidth: '1500px',
        padding: 0,
      },
    })}
    fixed={false}
    maxWidth={false}
    disableGutters={disableGutters}
  >
    {children}
  </Container>
);

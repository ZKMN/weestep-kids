'use client';

import React from 'react';
import { Box, Grid } from '@mui/material';

import { Socials } from '@/entities/Socials';

import { BaseContainer, BaseImage } from '@/shared/components';
import { useMediaSizes } from '@/shared/lib/hooks';

export const Footer = () => {
  const { isLessSm } = useMediaSizes();

  return (
    <Box
      mt={4}
      bgcolor="background.default"
      component="footer"
    >
      <BaseContainer>
        <Grid
          container
          padding={isLessSm ? '10px 0' : '40px 0'}
        >
          <Grid
            item
            mr={isLessSm ? 0 : 25}
            mb={isLessSm ? 2 : 0}
          >
            <BaseImage
              pointer
              priority
              src="/images/logo-short.svg"
              alt="Weestep Kids"
              width={200}
              height={40}
              objectFit="contain"
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            mb={isLessSm ? 2 : 0}
          >
            <Socials />
          </Grid>

        </Grid>
      </BaseContainer>
    </Box>
  );
};

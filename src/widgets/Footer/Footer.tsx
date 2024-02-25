'use client';

import React from 'react';
import { Box, Grid } from '@mui/material';

import { Socials } from '@/entities/Socials';

import { BaseContainer, BaseImage, Form } from '@/shared/components';
import { useMediaSizes } from '@/shared/lib/hooks';

import { FIELDS } from './consts';
import { validationSchema } from './lib';

export const Footer = () => {
  const { isLessSm } = useMediaSizes();

  return (
    <Box
      mt={2}
      bgcolor="background.main"
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

          <Grid item xs={12} md={4}>
            <Form
              fields={FIELDS}
              buttonProps={{ size: 'small' }}
              validationSchema={validationSchema}
              initialValues={{
                email: '',
                subject: '',
                message: '',
              }}
              onSubmit={({ subject, message }) => {
                window.location.href = `mailto:weestepkids@gmail.com?subject=${subject}&body=${message}`;
              }}
            />
          </Grid>

        </Grid>
      </BaseContainer>
    </Box>
  );
};

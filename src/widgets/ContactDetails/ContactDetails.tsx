'use client';

import React from 'react';
import { Grid } from '@mui/material';

import { Form } from '@/shared/components';

import { FIELDS } from './consts';
import { validationSchema } from './lib';

export const ContactDetails = () => (
  <Grid container>
    <Grid item lg={4}>

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
);

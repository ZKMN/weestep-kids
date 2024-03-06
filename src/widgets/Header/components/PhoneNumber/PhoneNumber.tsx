import React from 'react';
import { PhoneIphone, WhatsApp } from '@mui/icons-material';
import { Grid, Link } from '@mui/material';

export const PhoneNumber = () => (
  <Grid item>
    <Grid container alignItems="center">
      <Link
        mr={1}
        href="https://wa.me/+34611822584"
        color="text.black"
      >
        <WhatsApp />
      </Link>

      <Link
        href="tel:34611822584"
        color="text.black"
        underline="hover"
        display="flex"
        alignItems="center"
      >
        <PhoneIphone />

        +34 611-82-25-84
      </Link>
    </Grid>
  </Grid>
);

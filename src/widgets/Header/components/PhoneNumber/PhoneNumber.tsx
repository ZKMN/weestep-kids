import React from 'react';
import { Phone } from '@mui/icons-material';
import { Grid, Link } from '@mui/material';

export const PhoneNumber = () => (
  <Grid item>
    <Grid container alignItems="center">
      <Phone
        color="primary"
        fontSize="small"
      />

      <Link ml={1} href="tel:34611822584">
        +34 611-82-25-84
      </Link>
    </Grid>
  </Grid>
);

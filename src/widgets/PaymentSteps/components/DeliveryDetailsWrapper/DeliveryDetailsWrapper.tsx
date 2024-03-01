import React, { Dispatch } from 'react';
import { Grid } from '@mui/material';

import { DeliveryDetails } from '@/features/DeliveryDetails';

import { IntlButton } from '@/shared/components';

export const DeliveryDetailsWrapper = ({ setActiveStep }: { setActiveStep: Dispatch<number>; }) => (
  <Grid container justifyContent="center">
    <Grid item xs={12} md={8}>
      <DeliveryDetails />
    </Grid>

    <Grid item xs={12} md={8} mt={3}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item flex={1}>
          <IntlButton
            intl={{ label: 'buyMore' }}
            size="small"
            color="secondary"
            onClick={() => setActiveStep(0)}
          />
        </Grid>

        <Grid item flex={1}>
          <IntlButton
            intl={{ label: 'next' }}
            size="small"
            color="primary"
            onClick={() => setActiveStep(1)}
          />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

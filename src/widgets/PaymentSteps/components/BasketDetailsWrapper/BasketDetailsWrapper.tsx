import React, { Dispatch } from 'react';
import { Grid } from '@mui/material';

import { BasketDetails } from '@/features/BasketDetails';

import { IntlButton } from '@/shared/components';
import { useClickRedirect } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

export const BasketDetailsWrapper = ({ setActiveStep }: { setActiveStep: Dispatch<number>; }) => {
  const [handleRedirect] = useClickRedirect();

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
        <BasketDetails />
      </Grid>

      <Grid item xs={12} md={8} mt={3}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item flex={1}>
            <IntlButton
              intl={{ label: 'buyMore' }}
              size="small"
              color="secondary"
              onClick={handleRedirect(Links.CATALOGUE)}
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
};

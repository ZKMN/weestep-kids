import React from 'react';
import { CheckCircleTwoTone } from '@mui/icons-material';
import { Grid } from '@mui/material';

import { IntlButton, IntlTypography } from '@/shared/components';
import { useClickRedirect } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

export const SuccessDetails = () => {
  const [handleRedirect] = useClickRedirect();

  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
    >

      <CheckCircleTwoTone color="success" sx={{ fontSize: '5rem' }} />

      <IntlTypography
        intl={{ label: 'titles.orderConfirmed' }}
        fontSize="2rem"
        fontWeight={700}
      />

      <IntlTypography intl={{ label: 'texts.confirmDetailsOnMail' }} />

      <Grid item mt={3}>
        <IntlButton
          intl={{ label: 'continueShopping' }}
          onClick={handleRedirect(Links.CATALOGUE)}
          color="secondary"
        />
      </Grid>

    </Grid>
  );
};

import React, { useEffect } from 'react';
import { CheckCircleTwoTone } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { useQueryState } from 'nuqs';

import { IntlButton, IntlTypography } from '@/shared/components';
import { useClickRedirect } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

import { paymentStore } from '../../lib/store';

export const SuccessDetails = () => {
  const step = paymentStore((state) => state.step);
  const clientSecret = paymentStore((state) => state.clientSecret);

  const [redirectStep] = useQueryState('redirect_step');

  const [handleRedirect] = useClickRedirect();

  const [redirectStatus] = useQueryState('redirect_status');
  const [paymentIntent] = useQueryState('payment_intent');
  const [paymentIntentClientSecret] = useQueryState('payment_intent_client_secret');

  useEffect(() => {
    console.log(redirectStatus, paymentIntent, paymentIntentClientSecret, clientSecret);
  }, [redirectStatus, paymentIntent, paymentIntentClientSecret]);

  if (step !== 3 && !redirectStep) {
    return null;
  }

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
          color="secondary"
          onClick={handleRedirect(Links.CATALOGUE)}
        />
      </Grid>

    </Grid>
  );
};

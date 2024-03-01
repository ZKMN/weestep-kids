'use client';

import { Grid } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { config } from '@/shared/lib/config';
import { useTypedParams } from '@/shared/lib/hooks';

import { StripeForm } from './components';

import { CUSTOMER_INITIAL_VALUES } from '../DeliveryDetails/consts';

const stripePromise = loadStripe(String(config?.keys.stripePublish));

export const CreditCard = ({
  price,
  carrier,
  deliveryDetails,
}: {
  price: number;
  carrier?: number;
  deliveryDetails?: typeof CUSTOMER_INITIAL_VALUES;
}) => {
  const { lng } = useTypedParams();

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
        <Elements
          stripe={stripePromise}
          options={{ locale: lng }}
        >
          <StripeForm />
        </Elements>
      </Grid>
    </Grid>
  );
};

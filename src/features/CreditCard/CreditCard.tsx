'use client';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { config } from '@/shared/lib/config';
import { useTypedParams } from '@/shared/lib/hooks';

import { StripeForm } from './components';

const stripePromise = loadStripe(String(config?.stripePK));

export const CreditCard = () => {
  const { lng } = useTypedParams();

  return (
    <Elements
      stripe={stripePromise}
      options={{ locale: lng }}
    >
      <StripeForm />
    </Elements>
  );
};

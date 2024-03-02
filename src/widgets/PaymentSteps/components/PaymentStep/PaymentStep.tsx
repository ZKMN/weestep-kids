'use client';

import { Box, Grid, Link } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { IntlTypography } from '@/shared/components';
import { config } from '@/shared/lib/config';
import { getProductsPrice, getProductsQuantity } from '@/shared/lib/helpers';
import { useClientTranslation, useTypedParams } from '@/shared/lib/hooks';
import { localBasketStore } from '@/shared/lib/store';

import { OrderTotal, StripeForm } from './components';

import { IPaymentStepProps } from '../../types';

const stripePromise = loadStripe(String(config?.keys.stripePublish));

export const PaymentStep = ({
  carrier,
  deliveryDetails,
  setActiveStep,
}: IPaymentStepProps) => {
  const products = localBasketStore((state) => state.products);

  const { lng } = useTypedParams();

  const price = getProductsPrice(products);
  const quantity = getProductsQuantity(products);

  const [translate] = useClientTranslation('typography');

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
        <IntlTypography
          intl={{ label: 'titles.paymentMethod' }}
          fontWeight={700}
          textTransform="uppercase"
        />

        <Box mb={3}>
          <IntlTypography
            intl={{ label: 'texts.paymentInfo' }}
            fontSize="0.8rem"
            component="span"
            color="text.grey"
          />

          <Link
            href="https://stripe.com/es/legal/privacy-center"
            target="_blank"
            fontSize="0.8rem"
          >
            {translate('link')}
          </Link>
        </Box>

        <Elements
          stripe={stripePromise}
          options={{ locale: lng }}
        >
          <StripeForm
            amount={price + carrier.price}
            setActiveStep={setActiveStep}
            deliveryDetails={deliveryDetails}
          />
        </Elements>

        <OrderTotal
          price={price}
          carrier={carrier}
          quantity={quantity}
        />
      </Grid>
    </Grid>
  );
};

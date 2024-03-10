'use client';

import { Box, Grid } from '@mui/material';

import { IntlLink, IntlTypography } from '@/shared/components';
import { getProductsPrice, getProductsQuantity } from '@/shared/lib/helpers';
import { localBasketStore } from '@/shared/lib/store';

import { ChoosePaymentTabs, OrderTotal } from './components';

import { paymentStore } from '../../lib/store';

export const PaymentStep = () => {
  const carrier = paymentStore((state) => state.carrier);
  const products = localBasketStore((state) => state.products);

  const price = getProductsPrice(products);
  const quantity = getProductsQuantity(products);

  const amount = (price + (carrier?.price || 0)).toFixed(2);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
        <IntlTypography
          intl={{ label: 'titles.paymentMethod' }}
          fontWeight={700}
          textTransform="uppercase"
        />

        <Box mb={2}>
          <IntlTypography
            intl={{ label: 'texts.paymentInfo' }}
            fontSize="0.8rem"
            component="span"
            color="text.grey"
          />

          <IntlLink
            intl={{ label: 'link' }}
            href="https://stripe.com/es/legal/privacy-center"
            fontSize="0.8rem"
          />
        </Box>

        <ChoosePaymentTabs amount={amount} />

        <OrderTotal
          price={price}
          quantity={quantity}
        />
      </Grid>
    </Grid>
  );
};

'use client';

import React from 'react';
import {
  Box,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import dynamic from 'next/dynamic';

import { ProductBasketDetails } from '@/entities/Product';

import { IntlTypography } from '@/shared/components';
import { getCurrency, getProductsPrice, getProductsQuantity } from '@/shared/lib/helpers';
import { localBasketStore } from '@/shared/lib/store';

const BasketDetails = () => {
  const products = localBasketStore((state) => state.products);

  const price = getProductsPrice(products);
  const quantity = getProductsQuantity(products);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          {products?.map((product) => (
            <Grid item key={product.productId} xs={12}>
              <ProductBasketDetails product={product} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Box
          p={2}
          bgcolor="background.default"
          borderRadius={2}
        >
          <IntlTypography
            mb={2}
            intl={{ label: 'titles.orderSummary' }}
            color="primary"
            fontSize="1.5rem"
            fontWeight={700}
            textTransform="uppercase"
          />

          <Divider />

          <Grid
            mt={2}
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <IntlTypography
              intl={{ label: 'titles.total', values: { quantity } }}
              fontSize="1.2rem"
              fontWeight={700}
            />

            <Typography
              fontSize="1.2rem"
              fontWeight={700}
            >
              {getCurrency(price)}
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default dynamic(() => Promise.resolve(BasketDetails), { ssr: false });

'use client';

import React, { Dispatch } from 'react';
import {
  Box,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import dynamic from 'next/dynamic';

import { ProductBasketDetails } from '@/entities/Product';

import { IntlButton, IntlTypography } from '@/shared/components';
import { getCurrency, getProductsPrice, getProductsQuantity } from '@/shared/lib/helpers';
import { useClickRedirect } from '@/shared/lib/hooks';
import { localBasketStore } from '@/shared/lib/store';
import { Links } from '@/shared/types';

const BasketDetails = ({ setPrice, setActiveStep }: { setPrice: Dispatch<number>; setActiveStep: Dispatch<number>;}) => {
  const products = localBasketStore((state) => state.products);

  const [handleRedirect] = useClickRedirect();

  const price = getProductsPrice(products);
  const quantity = getProductsQuantity(products);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
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

          <Grid item xs={12} mt={3}>
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
                  onClick={() => {
                    setPrice(price);
                    setActiveStep(1);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default dynamic(() => Promise.resolve(BasketDetails), { ssr: false });

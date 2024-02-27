'use client';

import React from 'react';
import { ShoppingBagOutlined } from '@mui/icons-material';
import {
  Badge,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import dynamic from 'next/dynamic';

import { getCurrency } from '@/shared/lib/helpers';
import { localBasketStore } from '@/shared/lib/store';

const Cart = () => {
  const products = localBasketStore((state) => state.products);

  const summPrice = products?.reduce((acc, item) => {
    let price = acc;

    price += item.price;

    return price;
  }, 0);

  return (
    <Grid item>
      <Box
        sx={{ cursor: !products?.length ? '' : 'pointer' }}
        border="none"
        display="flex"
        bgcolor="transparent"
        component="button"
        disabled={!products?.length}
      >
        <Badge
          showZero
          color="secondary"
          badgeContent={products?.length}
        >
          <ShoppingBagOutlined />
        </Badge>

        <Typography ml={1}>
          {getCurrency(summPrice)}
        </Typography>
      </Box>
    </Grid>
  );
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false });

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

    price += item.price * item.quantity;

    return price;
  }, 0);

  const quantity = products?.reduce((acc, item) => {
    let qty = acc;

    qty += item.quantity;

    return qty;
  }, 0);

  return (
    <Grid item>
      <Box
        sx={{ cursor: !quantity ? '' : 'pointer' }}
        border="none"
        display="flex"
        bgcolor="transparent"
        component="button"
        disabled={!quantity}
      >
        <Badge
          showZero
          color="secondary"
          badgeContent={quantity}
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

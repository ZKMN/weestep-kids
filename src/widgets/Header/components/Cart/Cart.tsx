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

import { getCurrency, getProductsPrice, getProductsQuantity } from '@/shared/lib/helpers';
import { useClickRedirect } from '@/shared/lib/hooks';
import { localBasketStore } from '@/shared/lib/store';
import { Links } from '@/shared/types';

const Cart = () => {
  const products = localBasketStore((state) => state.products);

  const [handleClick] = useClickRedirect();

  const price = getProductsPrice(products);
  const quantity = getProductsQuantity(products);

  return (
    <Grid item>
      <Box
        sx={{ cursor: !quantity ? 'default' : 'pointer' }}
        border="none"
        display="flex"
        bgcolor="transparent"
        component="button"
        disabled={!quantity}
        onClick={handleClick(Links.CHECKOUT)}
      >
        <Badge
          showZero
          color="secondary"
          badgeContent={quantity}
        >
          <ShoppingBagOutlined />
        </Badge>

        <Typography ml={1}>
          {getCurrency(price)}
        </Typography>
      </Box>
    </Grid>
  );
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false });

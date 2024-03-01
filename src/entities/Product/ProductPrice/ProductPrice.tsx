import React from 'react';
import { Box, Typography } from '@mui/material';

import { getCurrency } from '@/shared/lib/helpers';

export const ProductPrice = ({
  price,
  large,
  discount,
}: {
  price: number;
  large?: boolean;
  discount?: number;
}) => (
  <Box position="relative">
    <Typography
      color={discount ? 'error' : ''}
      fontSize={large ? 28 : 18}
      fontWeight={700}
    >
      {getCurrency(price)}
    </Typography>

    {!!discount && (
      <Typography
        position="absolute"
        top={-15}
        left={0}
        fontSize={large ? 18 : 14}
        sx={{ textDecoration: 'line-through' }}
        color="text.grey"
      >
        {getCurrency(discount)}
      </Typography>
    )}
  </Box>
);

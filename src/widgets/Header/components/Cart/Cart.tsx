import React from 'react';
import { ShoppingBagOutlined } from '@mui/icons-material';
import { Badge, Box, Typography } from '@mui/material';

import { getCurrency } from '@/shared/lib/helpers';
import { appManagementStore } from '@/shared/lib/store';

export const Cart = () => {
  const unAuthProducts = appManagementStore((state) => state.unAuthProducts);

  return (
    <Box
      sx={{ cursor: 'pointer' }}
      display="flex"
      component="button"
      border="none"
      bgcolor="transparent"
    >
      <Badge
        showZero
        color="primary"
        badgeContent={unAuthProducts?.length}
      >
        <ShoppingBagOutlined />
      </Badge>

      <Typography ml={1}>
        {getCurrency(0)}
      </Typography>
    </Box>
  );
};

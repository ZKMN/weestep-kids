import React from 'react';
import { ShoppingBagOutlined } from '@mui/icons-material';
import {
  Badge,
  Box,
  Grid,
  Typography,
} from '@mui/material';

import { getCurrency } from '@/shared/lib/helpers';
import { appManagementStore } from '@/shared/lib/store';

export const Cart = () => {
  const unAuthProducts = appManagementStore((state) => state.unAuthProducts);

  return (
    <Grid item>
      <Box
        sx={{ cursor: 'pointer' }}
        display="flex"
        component="button"
        border="none"
        bgcolor="transparent"
      >
        <Badge
          showZero
          color="secondary"
          badgeContent={unAuthProducts?.length}
        >
          <ShoppingBagOutlined />
        </Badge>

        <Typography ml={1}>
          {getCurrency(0)}
        </Typography>
      </Box>
    </Grid>
  );
};

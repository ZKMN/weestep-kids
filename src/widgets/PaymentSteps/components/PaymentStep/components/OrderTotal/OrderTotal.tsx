import React from 'react';
import {
  Box,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

import { paymentStore } from '@/widgets/PaymentSteps/lib/store';

import { IntlTypography } from '@/shared/components';
import { getCurrency } from '@/shared/lib/helpers';

export const OrderTotal = ({
  price,
  quantity,
}: {
  price: number;
  quantity: number;
}) => {
  const carrier = paymentStore((state) => state.carrier);

  return (
    <Grid container mt={3}>
      <Grid item xs={12}>
        <Box
          p={1}
          bgcolor="background.default"
          borderRadius={2}
        >
          <IntlTypography
            intl={{ label: 'titles.orderSummary' }}
            color="primary"
            fontWeight={700}
            textTransform="uppercase"
          />

          <Divider sx={{ margin: '8px 0' }} />

          {carrier && (
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
            >
              <IntlTypography
                intl={{ label: 'titles.delivery' }}
                color="text.grey"
                fontWeight={700}
              />

              <Typography
                color="text.grey"
                fontWeight={700}
              >
                {getCurrency(carrier.price)}
              </Typography>
            </Grid>
          )}

          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <IntlTypography
              intl={{ label: 'titles.pairs', values: { quantity } }}
              color="text.grey"
              fontWeight={700}
            />

            <Typography
              color="text.grey"
              fontWeight={700}
            >
              {getCurrency(price)}
            </Typography>
          </Grid>

          <Grid
            mt={2}
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <IntlTypography
              intl={{ label: 'titles.total' }}
              color="text.grey"
              fontWeight={700}
            />

            <Typography
              color="text.grey"
              fontWeight={700}
            >
              {getCurrency(price + (carrier?.price || 0))}
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

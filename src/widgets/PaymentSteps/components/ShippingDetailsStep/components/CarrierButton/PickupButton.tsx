import React from 'react';
import { TransferWithinAStation } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';

import { setCarrierAction } from '@/widgets/PaymentSteps/lib/store';
import { IPaymentStore } from '@/widgets/PaymentSteps/types';

import { IntlTypography } from '@/shared/components';

export const PickupButton = ({ carrier }: { carrier: IPaymentStore['carrier']; }) => (
  <Box
    sx={{
      cursor: 'pointer',
      outline: !carrier ? '2px solid #FF7C2A' : 'none',
      minHeight: 50,
    }}
    width="100%"
    component="button"
    onClick={() => setCarrierAction(null)}
    bgcolor="background.paper"
    padding={0.5}
    border="1px solid"
    borderColor="border.main"
    borderRadius={1}
  >
    <Grid container justifyContent="flex-start" alignItems="center">
      <Grid item flex={1}>
        <IntlTypography
          intl={{ label: 'titles.pickup' }}
          fontSize="0.8rem"
          textAlign="left"
          fontWeight={700}
        />

        <IntlTypography
          intl={{ label: 'labels.inAlicante' }}
          fontSize="0.8rem"
          textAlign="left"
        />
      </Grid>

      <Grid item>
        <TransferWithinAStation />
      </Grid>
    </Grid>
  </Box>
);

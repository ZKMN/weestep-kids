import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { setCarrierAction } from '@/widgets/PaymentSteps/lib/store';
import { ICarrier } from '@/widgets/PaymentSteps/types';

import { BaseImage } from '@/shared/components';
import { getCurrency } from '@/shared/lib/helpers';

export const CarrierButton = ({
  active,
  carrier,
}: {
  active: boolean;
  carrier: ICarrier;
}) => (
  <Box
    sx={{ cursor: 'pointer', outline: active ? '2px solid #FF7C2A' : 'none' }}
    width="100%"
    component="button"
    onClick={() => setCarrierAction(carrier)}
    bgcolor="background.paper"
    padding={0.5}
    border="1px solid"
    borderColor="border.main"
    borderRadius={1}
  >
    <Grid container>
      <Grid item flex={1}>
        <Typography
          fontSize="0.8rem"
          textAlign="left"
          fontWeight={700}
        >
          {carrier.name}
        </Typography>

        <Typography
          fontSize="0.8rem"
          textAlign="left"
        >
          {getCurrency(carrier.price)}
        </Typography>
      </Grid>

      <Grid item>
        <BaseImage
          width={40}
          height={40}
          src={carrier.image}
          alt={carrier.name}
          objectFit="contain"
        />
      </Grid>
    </Grid>
  </Box>
);

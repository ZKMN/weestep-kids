import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { ICarrier, IDeliveryDetailsStepProps } from '@/widgets/PaymentSteps/types';

import { BaseImage } from '@/shared/components';
import { getCurrency } from '@/shared/lib/helpers';

export const CarrierButton = ({
  active,
  carrier,
  setCarrier,
}: {
  active: boolean;
  carrier: ICarrier;
  setCarrier: IDeliveryDetailsStepProps['setCarrier'];
}) => (
  <Box
    component="button"
    onClick={() => setCarrier(carrier)}
    sx={{ cursor: 'pointer', outline: active ? '2px solid #FF7C2A' : 'none' }}
    width="100%"
    bgcolor="baseWhite.main"
    padding={0.5}
    border="1px solid"
    borderColor="border.main"
    borderRadius={1}
  >
    <Grid container>
      <Grid item flex={1}>
        <Typography fontWeight={700}>
          {carrier.name}
        </Typography>

        <Typography>
          {getCurrency(carrier.price)}
        </Typography>
      </Grid>

      <Grid item>
        <BaseImage
          width={50}
          height={50}
          src={carrier.image}
          alt={carrier.name}
          objectFit="contain"
        />
      </Grid>
    </Grid>
  </Box>
);

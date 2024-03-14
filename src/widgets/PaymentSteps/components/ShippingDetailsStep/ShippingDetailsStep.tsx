import React from 'react';
import { Divider, Grid } from '@mui/material';

import { IntlTypography } from '@/shared/components';

import {
  AddressButton,
  CarrierButton,
  PickupButton,
  ShippingForm,
} from './components';

import { CARRIERS } from '../../consts';
import { paymentStore } from '../../lib/store';

export const ShippingDetailsStep = () => {
  const carrier = paymentStore((state) => state.carrier);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item>
                <IntlTypography
                  intl={{ label: 'titles.shippingMethod' }}
                  color="text.grey"
                  fontWeight={700}
                  textTransform="uppercase"
                />
              </Grid>

              <Grid item>
                <AddressButton />
              </Grid>
            </Grid>
          </Grid>

          {CARRIERS.map((carr) => (
            <Grid item key={carr.id} xs={6} sm={3}>
              <CarrierButton
                active={carrier?.id === carr.id}
                carrier={carr}
              />
            </Grid>
          ))}
          <Grid item xs={6} sm={3}>
            <PickupButton carrier={carrier} />
          </Grid>
        </Grid>

        <Divider sx={{ margin: '24px 0' }} />

        <ShippingForm />
      </Grid>
    </Grid>
  );
};

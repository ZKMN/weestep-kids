import React from 'react';
import { Divider, Grid } from '@mui/material';

import {
  FieldByType, Form, IntlButton, IntlTypography,
} from '@/shared/components';

import { AutocompleteInput, CarrierButton, SubmitFormButton } from './components';

import {
  ADDRESS_FIELDS,
  CARRIERS,
  CUSTOMER_FIELDS,
  CUSTOMER_INITIAL_VALUES,
} from '../../consts';
import { CUSTOMER_FORM_SCHEMA } from '../../lib/helpers';
import { IDeliveryDetailsStepProps } from '../../types';

export const DeliveryDetails = ({
  carrier,
  setCarrier,
  setActiveStep,
  setDeliveryDetails,
}: IDeliveryDetailsStepProps) => (
  <Grid container justifyContent="center">
    <Grid item xs={12} md={8}>
      <Form
        fields={CUSTOMER_FIELDS}
        initialValues={CUSTOMER_INITIAL_VALUES}
        validationSchema={CUSTOMER_FORM_SCHEMA}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AutocompleteInput />
          </Grid>

          {ADDRESS_FIELDS.map((field) => (
            <Grid item xs={field.xs || 12} md={field.md} key={field.name}>
              <FieldByType field={field} />
            </Grid>
          ))}
        </Grid>

        <Grid container mt={0.5} spacing={2}>
          <Grid item xs={12}>
            <IntlTypography
              intl={{ label: 'titles.shippingMethod' }}
              color="text.grey"
              fontWeight={700}
              textTransform="uppercase"
            />
          </Grid>

          {CARRIERS.map((carr) => (
            <Grid item key={carr.id} xs={6} md={4}>
              <CarrierButton
                active={carrier.id === carr.id}
                carrier={carr}
                setCarrier={setCarrier}
              />
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ margin: '24px 0' }} />

        <Grid container spacing={2}>
          <Grid item flex={1}>
            <IntlButton
              intl={{ label: 'back' }}
              size="small"
              color="secondary"
              variant="outlined"
              onClick={() => setActiveStep((step) => step - 1)}
            />
          </Grid>

          <Grid item flex={1}>
            <SubmitFormButton
              setActiveStep={setActiveStep}
              setDeliveryDetails={setDeliveryDetails}
            />
          </Grid>
        </Grid>
      </Form>
    </Grid>
  </Grid>
);

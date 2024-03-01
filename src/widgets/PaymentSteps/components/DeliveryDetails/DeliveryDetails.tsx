import React from 'react';
import { Grid } from '@mui/material';

import { FieldByType, Form, IntlButton } from '@/shared/components';

import { AutocompleteInput, SubmitFormButton } from './components';
import { ADDRESS_FIELDS, CUSTOMER_FIELDS, CUSTOMER_INITIAL_VALUES } from './consts';
import { CUSTOMER_FORM_SCHEMA } from './lib';
import { IDeliveryDetails } from './types';

export const DeliveryDetails = ({
  setActiveStep,
  setDeliveryDetails,
}: IDeliveryDetails) => (
  <Grid container justifyContent="center">
    <Grid item xs={12} md={8}>
      <Form
        fields={CUSTOMER_FIELDS}
        validationSchema={CUSTOMER_FORM_SCHEMA}
        initialValues={CUSTOMER_INITIAL_VALUES}
        onSubmit={() => null}
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

        <Grid
          container
          mt={2}
          spacing={2}
          justifyContent="space-between"
        >
          <Grid item flex={1}>
            <IntlButton
              intl={{ label: 'back' }}
              size="small"
              color="secondary"
              variant="outlined"
              onClick={() => setActiveStep(0)}
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

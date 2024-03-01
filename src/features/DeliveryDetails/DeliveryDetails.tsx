import React from 'react';

import { Form } from '@/shared/components';

import { CUSTOMER_FIELDS, CUSTOMER_INITIAL_VALUES } from './consts';
import { CUSTOMER_FORM_SCHEMA } from './lib';

export const DeliveryDetails = () => (
  <Form
    fields={CUSTOMER_FIELDS}
    validationSchema={CUSTOMER_FORM_SCHEMA}
    initialValues={CUSTOMER_INITIAL_VALUES}
    onSubmit={() => null}
  >
    asd
  </Form>
);

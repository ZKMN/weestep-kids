import React from 'react';

import { PaymentSteps } from '@/widgets/PaymentSteps';

import { BaseContainer } from '@/shared/components';

import { Title } from './components';

export const Checkout = () => (
  <BaseContainer pt={2} maxWidth={800}>
    <Title />

    <PaymentSteps />
  </BaseContainer>
);

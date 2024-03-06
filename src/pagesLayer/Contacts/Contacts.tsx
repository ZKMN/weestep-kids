import React from 'react';

import { ContactDetails } from '@/widgets/ContactDetails';

import { BaseContainer } from '@/shared/components';

import { Title } from './components';

export const Contacts = () => (
  <BaseContainer pt={2} maxWidth={900}>
    <Title />

    <ContactDetails />
  </BaseContainer>
);

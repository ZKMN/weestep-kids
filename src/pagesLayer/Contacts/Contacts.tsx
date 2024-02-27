import React from 'react';

import { ContactDetails } from '@/widgets/ContactDetails';

import { BaseContainer } from '@/shared/components';

export const Contacts = () => (
  <BaseContainer sx={{ pt: 2 }}>
    <ContactDetails />
  </BaseContainer>
);

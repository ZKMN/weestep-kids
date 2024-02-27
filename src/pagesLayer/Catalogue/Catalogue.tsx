import React from 'react';

import { CatalogueList } from '@/widgets/CatalogueList';

import { BaseContainer } from '@/shared/components';

import { Title } from './components';

export const Catalogue = () => (
  <BaseContainer pt={2}>
    <Title />

    <CatalogueList />
  </BaseContainer>
);

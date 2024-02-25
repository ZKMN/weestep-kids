import React from 'react';

import { CatalogueList } from '@/widgets/CatalogueList';

import { BaseContainer } from '@/shared/components';

import { Title } from './components';

export const Catalogue = () => (
  <BaseContainer sx={{ pt: '10px' }}>
    <Title />

    <CatalogueList />
  </BaseContainer>
);

import React from 'react';

import { ProductDetails } from '@/widgets/ProductDetails';

import { BaseContainer } from '@/shared/components';

export const Product = () => (
  <BaseContainer pt={2}>
    <ProductDetails />
  </BaseContainer>
);

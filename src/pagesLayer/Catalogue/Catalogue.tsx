import React, { Suspense } from 'react';

import { CatalogueList } from '@/widgets/CatalogueList';

import { BaseContainer } from '@/shared/components';
import { IProductShort } from '@/shared/types/product';

import { Pagination, Title } from './components';

export const Catalogue = ({ total, products }: { total: number; products: IProductShort[]; }) => (
  <BaseContainer pt={2}>
    <Title />

    <Suspense>
      <CatalogueList products={products} />
    </Suspense>

    <Suspense>
      <Pagination total={total} />
    </Suspense>
  </BaseContainer>
);

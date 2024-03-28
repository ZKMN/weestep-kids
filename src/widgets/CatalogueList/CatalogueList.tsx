'use client';

import React from 'react';
import { Box, Grid } from '@mui/material';
import { useSearchParams } from 'next/navigation';

import { useGetSWR } from '@/shared/api/hooks';
import { breakpoints } from '@/shared/assets';
import { PRODUCTS_COUNT } from '@/shared/consts';
import { IProductShort } from '@/shared/types/product';

import {
  Filters,
  FiltersDrawer,
  ProductCard,
  RemoveFilters,
  SortBy,
} from './components';

export const CatalogueList = ({ products }: { products: IProductShort[]; }) => {
  const queryParams = useSearchParams();

  const page = queryParams.get('pagina');

  const { data } = useGetSWR<{ items: IProductShort[]; total: number; }>({
    url: '/products/list',
    queryParams: {
      page: page || 1,
      paginate_by: PRODUCTS_COUNT,
    },
    config: {
      fallbackData: { items: products },
      onSuccess: () => window.scrollTo({ top: 0 }),
    },
  });

  return (
    <Box
      sx={{
        [breakpoints.up('md')]: {
          mt: 3,
        },
      }}
    >
      <Grid
        container
        mb={3}
        justifyContent="space-between"
      >
        <Grid item flex={1}>
          <RemoveFilters />
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            [breakpoints.down('md')]: {
              display: 'none',
            },
          }}
        >
          <SortBy />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3} lg={2} component="section">
          <Grid container spacing={{ xs: 1 }}>
            <Grid item xs={6} md={12}>
              <Box
                sx={{
                  [breakpoints.down('md')]: {
                    display: 'none',
                  },
                }}
              >
                <Filters />
              </Box>

              <FiltersDrawer />
            </Grid>

            <Grid
              item
              xs={6}
              sx={{
                [breakpoints.up('md')]: {
                  display: 'none',
                },
              }}
            >
              <SortBy />
            </Grid>
          </Grid>
        </Grid>

        <Grid item flex={1} component="section">
          <Grid container spacing={2}>
            {data?.items.map((product) => (
              <Grid
                item
                key={product.productId}
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

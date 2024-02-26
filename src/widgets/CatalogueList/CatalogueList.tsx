'use client';

import React from 'react';
import { Box, Grid } from '@mui/material';

import { useMediaSizes } from '@/shared/lib/hooks';

import {
  Filters, ProductCard, RemoveFilters, SortBy,
} from './components';

const products = [
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    code: 'ABC123',
    name: 'Product A',
    price: 29.99,
    discount: 10,
    topSales: true,
    colors: ['#FF0000', '#0000FF', '#00FF00'],
    sizes: [22, 25, 28],
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    code: 'XYZ789',
    name: 'Product B',
    price: 39.99,
    discount: 0,
    topSales: false,
    colors: ['#000000', '#FFFFFF', '#808080'],
    sizes: [25, 28, 31],
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    code: 'PQR456',
    name: 'Product C',
    price: 49.99,
    discount: 20,
    topSales: true,
    colors: ['#FFFF00', '#800080', '#FFA500'],
    sizes: [22, 28, 31],
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    code: 'LMN789',
    name: 'Product D',
    price: 25.99,
    discount: 0,
    topSales: false,
    colors: ['#A52A2A', '#00FFFF', '#FFC0CB'],
    sizes: [22, 25, 31],
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    code: 'DEF321',
    name: 'Product E',
    price: 59.99,
    discount: 25,
    topSales: true,
    colors: ['#0000FF', '#00FF00', '#FFFFFF'],
    sizes: [25, 28, 31],
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    code: 'JKL987',
    name: 'Product F',
    price: 19.99,
    discount: 0,
    topSales: false,
    colors: ['#FF0000', '#000000', '#FFFF00'],
    sizes: [22, 25, 28],
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    code: 'GHI654',
    name: 'Product G',
    price: 34.99,
    discount: 12,
    topSales: true,
    colors: ['#800080', '#FFA500', '#808080'],
    sizes: [25, 28, 31],
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    code: 'MNO012',
    name: 'Product H',
    price: 45.99,
    discount: 18,
    topSales: false,
    colors: ['#A52A2A', '#FFC0CB', '#00FFFF'],
    sizes: [22, 28, 31],
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    code: 'UVW345',
    name: 'Product I',
    price: 27.99,
    discount: 7,
    topSales: true,
    colors: ['#000000', '#FFFFFF', '#0000FF'],
    sizes: [22, 25, 28],
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    code: 'STU678',
    name: 'Product J',
    price: 55.99,
    discount: 22,
    topSales: false,
    colors: ['#00FF00', '#FF0000', '#800080'],
    sizes: [25, 28, 31],
  },
];

export const CatalogueList = () => {
  const { isLessMd, isBiggerMd } = useMediaSizes();

  return (
    <Box mt={3}>
      <Grid
        container
        mb={3}
        justifyContent="space-between"
      >
        <Grid item flex={1}>
          <RemoveFilters />
        </Grid>

        {isBiggerMd && (
          <Grid item xs={2}>
            <SortBy />
          </Grid>
        )}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3} lg={2}>
          <Box component="section" width="100%">
            <Grid container spacing={{ xs: 1 }}>
              <Grid item xs={6} md={12}>
                <Filters />
              </Grid>

              {isLessMd && (
                <Grid item xs={6}>
                  <SortBy />
                </Grid>
              )}
            </Grid>
          </Box>
        </Grid>

        <Grid item flex={1}>
          <Box component="section" width="100%">
            <Grid container spacing={2}>
              {products.map((product) => (
                <Grid
                  item
                  key={product.code}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

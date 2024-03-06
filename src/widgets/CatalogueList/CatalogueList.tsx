'use client';

import React from 'react';
import { Box, Grid } from '@mui/material';

import { breakpoints } from '@/shared/assets';

import {
  Filters,
  FiltersDrawer,
  ProductCard,
  RemoveFilters,
  SortBy,
} from './components';

const products = [
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product A',
    price: 29.99,
    discount: 10,
    topSales: true,
    colorsAvailable: [
      {
        id: '1',
        value: '#FF0000',
      },
      {
        id: '2',
        value: '#0000FF',
      },
      {
        id: '3',
        value: '#00FF00',
      },
    ],
    sizes: [
      {
        id: '1',
        value: 22,
      },
      {
        id: '2',
        value: 23,
      },
      {
        id: '3',
        value: 24,
      },
      {
        id: '4',
        value: 25,
      },
      {
        id: '5',
        value: 26,
      },
      {
        id: '6',
        value: 27,
      },
      {
        id: '7',
        value: 28,
      },
    ],
    type: 'kids-shoes',
    productId: 'ABC123',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product B',
    price: 39.99,
    discount: 0,
    topSales: false,
    colorsAvailable: [
      {
        id: '1',
        value: '#000000',
      },
      {
        id: '2',
        value: '#FFFFFF',
      },
      {
        id: '3',
        value: '#808080',
      },
    ],
    sizes: [
      {
        id: '1',
        value: 25,
      },
      {
        id: '2',
        value: 28,
      },
      {
        id: '3',
        value: 31,
      },
    ],
    type: 'kids-shoes',
    productId: 'XYZ789',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product C',
    price: 49.99,
    discount: 20,
    topSales: true,
    colorsAvailable: [
      {
        id: '1',
        value: '#FFFF00',
      },
      {
        id: '2',
        value: '#800080',
      },
      {
        id: '3',
        value: '#FFA500',
      },
    ],
    sizes: [
      {
        id: '1',
        value: 22,
      },
      {
        id: '2',
        value: 28,
      },
      {
        id: '3',
        value: 31,
      },
    ],
    type: 'kids-shoes',
    productId: 'PQR456',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product D',
    price: 25.99,
    discount: 0,
    topSales: false,
    colorsAvailable: [
      {
        id: '1',
        value: '#A52A2A',
      },
      {
        id: '2',
        value: '#00FFFF',
      },
      {
        id: '3',
        value: '#FFC0CB',
      },
    ],
    sizes: [
      {
        id: '1',
        value: 22,
      },
      {
        id: '2',
        value: 25,
      },
      {
        id: '3',
        value: 31,
      },
    ],
    type: 'kids-shoes',
    productId: 'LMN789',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product E',
    price: 59.99,
    discount: 25,
    topSales: true,
    colorsAvailable: [
      {
        id: '1',
        value: '#0000FF',
      },
      {
        id: '2',
        value: '#00FF00',
      },
      {
        id: '3',
        value: '#FFFFFF',
      },
    ],
    sizes: [
      {
        id: '1',
        value: 25,
      },
      {
        id: '2',
        value: 28,
      },
      {
        id: '3',
        value: 31,
      },
    ],
    type: 'kids-shoes',
    productId: 'DEF321',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product F',
    price: 19.99,
    discount: 0,
    topSales: false,
    colorsAvailable: [
      {
        id: '1',
        value: '#FF0000',
      },
      {
        id: '2',
        value: '#000000',
      },
      {
        id: '3',
        value: '#FFFF00',
      },
    ],
    sizes: [
      {
        id: '1',
        value: 22,
      },
      {
        id: '2',
        value: 25,
      },
      {
        id: '3',
        value: 28,
      },
    ],
    type: 'kids-shoes',
    productId: 'JKL987',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product G',
    price: 34.99,
    discount: 12,
    topSales: true,
    colorsAvailable: [
      {
        id: '1',
        value: '#800080',
      },
      {
        id: '2',
        value: '#FFA500',
      },
      {
        id: '3',
        value: '#808080',
      },
    ],
    sizes: [
      {
        id: '1',
        value: 25,
      },
      {
        id: '2',
        value: 28,
      },
      {
        id: '3',
        value: 31,
      },
    ],
    type: 'kids-shoes',
    productId: 'GHI654',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product H',
    price: 45.99,
    discount: 18,
    topSales: false,
    colorsAvailable: [
      {
        id: '1',
        value: '#A52A2A',
      },
      {
        id: '2',
        value: '#FFC0CB',
      },
      {
        id: '3',
        value: '#00FFFF',
      },
    ],
    sizes: [
      {
        id: '1',
        value: 22,
      },
      {
        id: '2',
        value: 28,
      },
      {
        id: '3',
        value: 31,
      },
    ],
    type: 'kids-shoes',
    productId: 'MNO012',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product I',
    price: 27.99,
    discount: 7,
    topSales: true,
    colorsAvailable: [
      {
        id: '1',
        value: '#000000',
      },
      {
        id: '2',
        value: '#FFFFFF',
      },
      {
        id: '3',
        value: '#0000FF',
      },
    ],
    sizes: [
      {
        id: '1',
        value: 22,
      },
      {
        id: '2',
        value: 25,
      },
      {
        id: '3',
        value: 28,
      },
    ],
    type: 'kids-shoes',
    productId: 'UVW345',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product J',
    price: 55.99,
    discount: 22,
    topSales: false,
    colorsAvailable: [
      {
        id: '1',
        value: '#00FF00',
      },
      {
        id: '2',
        value: '#FF0000',
      },
      {
        id: '3',
        value: '#800080',
      },
    ],
    sizes: [
      {
        id: '1',
        value: 25,
      },
      {
        id: '2',
        value: 28,
      },
      {
        id: '3',
        value: 31,
      },
    ],
    type: 'kids-shoes',
    productId: 'STU678',
  },
];

export const CatalogueList = () => (
  <Box mt={3}>
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
      <Grid item xs={12} md={3} lg={2}>
        <Box component="section" width="100%">
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
        </Box>
      </Grid>

      <Grid item flex={1}>
        <Box component="section" width="100%">
          <Grid container spacing={2}>
            {products.map((product) => (
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
        </Box>
      </Grid>
    </Grid>
  </Box>
);

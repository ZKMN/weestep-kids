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
    colorsAvailable: ['#FF0000', '#0000FF', '#00FF00'],
    sizes: [22, 23, 24, 25, 26, 27, 28],
    type: 'kids-shoes',
    productId: 'ABC123',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product B',
    price: 39.99,
    discount: 0,
    topSales: false,
    colorsAvailable: ['#000000', '#FFFFFF', '#808080'],
    sizes: [25, 28, 31],
    type: 'kids-shoes',
    productId: 'XYZ789',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product C',
    price: 49.99,
    discount: 20,
    topSales: true,
    colorsAvailable: ['#FFFF00', '#800080', '#FFA500'],
    sizes: [22, 28, 31],
    type: 'kids-shoes',
    productId: 'PQR456',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product D',
    price: 25.99,
    discount: 0,
    topSales: false,
    colorsAvailable: ['#A52A2A', '#00FFFF', '#FFC0CB'],
    sizes: [22, 25, 31],
    type: 'kids-shoes',
    productId: 'LMN789',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product E',
    price: 59.99,
    discount: 25,
    topSales: true,
    colorsAvailable: ['#0000FF', '#00FF00', '#FFFFFF'],
    sizes: [25, 28, 31],
    type: 'kids-shoes',
    productId: 'DEF321',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product F',
    price: 19.99,
    discount: 0,
    topSales: false,
    colorsAvailable: ['#FF0000', '#000000', '#FFFF00'],
    sizes: [22, 25, 28],
    type: 'kids-shoes',
    productId: 'JKL987',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product G',
    price: 34.99,
    discount: 12,
    topSales: true,
    colorsAvailable: ['#800080', '#FFA500', '#808080'],
    sizes: [25, 28, 31],
    type: 'kids-shoes',
    productId: 'GHI654',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product H',
    price: 45.99,
    discount: 18,
    topSales: false,
    colorsAvailable: ['#A52A2A', '#FFC0CB', '#00FFFF'],
    sizes: [22, 28, 31],
    type: 'kids-shoes',
    productId: 'MNO012',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product I',
    price: 27.99,
    discount: 7,
    topSales: true,
    colorsAvailable: ['#000000', '#FFFFFF', '#0000FF'],
    sizes: [22, 25, 28],
    type: 'kids-shoes',
    productId: 'UVW345',
  },
  {
    img: 'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
    name: 'Product J',
    price: 55.99,
    discount: 22,
    topSales: false,
    colorsAvailable: ['#00FF00', '#FF0000', '#800080'],
    sizes: [25, 28, 31],
    type: 'kids-shoes',
    productId: 'STU678',
  },
].map((product) => ({
  ...product,
  colorsAvailable: product.colorsAvailable.map((color, index) => ({ id: String(index + 1), value: color })),
  sizes: product.sizes.map((size, index) => ({ id: String(index + 1), value: size })),
}));

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

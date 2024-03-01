'use client';

import React from 'react';
import {
  Box,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

import { ProductPrice, ProductTopSale } from '@/entities/Product';

import { IntlTypography } from '@/shared/components';
import { useMediaSizes, useTypedParams } from '@/shared/lib/hooks';

import { AddProductButton } from './AddProductButton';
import { Carousel } from './Carousel';
import { ChooseColor } from './ChooseColor';
import { ChooseQuantity } from './ChooseQuantity';
import { ChooseSize } from './ChooseSize';

export const Details = ({ product }: any) => {
  const { productId } = useTypedParams();

  const {
    type,
    name,
    price,
    sizes,
    color,
    colorsAvailable,
    images,
    discount,
    topSales,
    available,
  } = product;

  const { isLessMd, isLessSm } = useMediaSizes();

  return (
    <Grid container mt={2}>
      <Grid
        item
        xs={12}
        md={6}
        mb={isLessMd ? 3 : 0}
        position="relative"
        component="section"
      >
        <Box position="absolute" right={0} top={10} zIndex={2}>
          <ProductTopSale
            size="medium"
            topSales={topSales}
          />
        </Box>

        <Carousel images={images} />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        lg={5}
        ml={isLessMd ? 0 : 8}
        component="section"
      >
        <Grid container>
          <Grid item xs={12} mb={2}>

            <Grid container mb={isLessSm ? 1 : 0}>
              <Typography mr={2} color="text.grey">
                {productId}
              </Typography>

              <IntlTypography
                color="text.green"
                intl={{ label: 'texts.inStock', values: { count: available } }}
                fontWeight={700}
              />
            </Grid>

            <Grid
              container
              mb={isLessMd ? 2 : 5}
              justifyContent="space-between"
            >
              <Typography
                variant="h1"
                fontSize={isLessMd ? '2rem' : '3rem'}
                fontWeight={700}
              >
                {name}
              </Typography>
            </Grid>

            <Grid
              container
              mb={isLessMd ? 2 : 5}
            >
              <ProductPrice
                large
                price={price}
                discount={discount}
              />
            </Grid>

            <ChooseSize sizes={sizes} />

            <Divider />

            <ChooseColor color={color} colors={colorsAvailable} />

            <Divider />

            <ChooseQuantity available={available} />
          </Grid>

          <AddProductButton
            name={name}
            type={type}
            image={images[0]}
            price={price}
            color={color}
            sizes={sizes}
            discount={discount}
            available={available}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

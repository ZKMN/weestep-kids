'use client';

import React, { useState } from 'react';
import {
  Box,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

import { ProductPrice, ProductTopSale } from '@/entities/Product';

import { useMediaSizes } from '@/shared/lib/hooks';

import { Carousel } from './Carousel';
import { ChooseColor } from './ChooseColor';
import { ChooseSize } from './ChooseSize';

export const Details = ({ product }: any) => {
  const {
    name,
    price,
    sizes,
    colors,
    images,
    discount,
    topSales,
    productId,
  } = product;

  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  const { isLessMd } = useMediaSizes();

  return (
    <Grid container mt={2}>
      <Grid
        item
        xs={12}
        md={5}
        mb={isLessMd ? 3 : 0}
        component="section"
        position="relative"
      >
        <Box position="absolute" left={0} top={10} zIndex={2}>
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
        <Typography color="text.grey">
          {productId}
        </Typography>

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

          <ProductPrice
            large
            price={price}
            discount={discount}
          />
        </Grid>

        <ChooseSize
          size={size}
          sizes={sizes}
          setSize={setSize}
        />

        <Divider />

        <ChooseColor
          color={color}
          colors={colors}
          setColor={setColor}
        />
      </Grid>
    </Grid>
  );
};

'use client';

import React from 'react';
import {
  Box,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

import { ProductPrice, ProductTopSale } from '@/entities/Product';

import { breakpoints } from '@/shared/assets';
import { IntlTypography } from '@/shared/components';
import { useTypedParams } from '@/shared/lib/hooks';

import { AddProductButton } from './AddProductButton';
import { Carousel } from './Carousel';
import { ChooseColor } from './ChooseColor';
import { ChooseQuantity } from './ChooseQuantity';
import { ChooseSize } from './ChooseSize';
import { FootLength } from './FootLength';

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

  return (
    <Grid container mt={2}>
      <Grid
        item
        xs={12}
        md={6}
        position="relative"
        component="section"
        sx={{
          mb: 0,
          [breakpoints.down('md')]: {
            mb: 3,
          },
        }}
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
        component="section"
        sx={{
          ml: 8,
          [breakpoints.down('md')]: {
            ml: 0,
          },
        }}
      >
        <Grid container>
          <Grid item xs={12} mb={2}>
            <Grid container>
              <Typography mr={2} color="text.grey">
                {productId}
              </Typography>

              <IntlTypography
                color="text.green"
                intl={{ label: 'texts.inStock', values: { count: available } }}
                fontWeight={700}
              />
            </Grid>

            <Grid container mb={5}>
              <Typography
                variant="h1"
                component="h1"
                fontWeight={700}
                sx={{
                  fontSize: '3rem',
                  [breakpoints.down('md')]: {
                    fontSize: '2rem',
                  },
                }}
              >
                {name}
              </Typography>
            </Grid>

            <Grid
              container
              sx={{
                mb: 5,
                [breakpoints.down('md')]: {
                  mb: 2,
                },
              }}
            >
              <ProductPrice
                large
                price={price}
                discount={discount}
              />

              <Grid
                item
                pb={0.5}
                ml={1}
                display="flex"
                alignItems="end"
              >
                <IntlTypography
                  intl={{ label: 'texts.taxIncluded' }}
                  color="text.grey"
                />
              </Grid>
            </Grid>

            <FootLength sizes={sizes} />

            <Divider />

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

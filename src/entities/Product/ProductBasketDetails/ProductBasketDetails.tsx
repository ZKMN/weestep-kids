import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { startCase, toLower } from 'lodash';

import { BaseImage } from '@/shared/components';
import { decreaseProductQuantityAction, increaseProductQuantityAction } from '@/shared/lib/store';
import { IBasketProduct } from '@/shared/types';

import { Actions } from './Actions';

import { ProductColor, ProductPrice, ProductQuantity } from '..';

export const ProductBasketDetails = ({ product, onEdit }: { product: IBasketProduct; onEdit?: () => void; }) => {
  const {
    type,
    name,
    size,
    color,
    image,
    price,
    discount,
    quantity,
    productId,
    available,
  } = product;

  return (
    <Grid
      container
      p={1}
      bgcolor="background.default"
      borderRadius={2}
    >
      <Grid item flex={1} position="relative">
        <Box position="absolute" right={0} zIndex={5}>
          <Actions
            type={type}
            sizeId={size?.id}
            quantity={quantity}
            productId={productId}
            onEdit={onEdit}
          />
        </Box>

        <Grid container spacing={1.5} alignItems="center">
          <Grid item>
            <BaseImage
              alt={name}
              src={image}
              width={70}
              height={70}
              objectFit="contain"
            />
          </Grid>

          <Grid item flex={1}>
            <Grid container>
              <Grid item>
                <Typography
                  fontSize={18}
                  fontWeight={700}
                >
                  {name}
                </Typography>
              </Grid>
            </Grid>

            <Grid container mb={2} spacing={1.5} alignItems="center">
              <Grid item>
                <Typography color="text.grey">
                  {startCase(toLower(type))}
                </Typography>
              </Grid>

              <Grid item>
                <Typography color="primary">
                  {size?.value}
                </Typography>
              </Grid>

              <Grid item>
                <ProductColor
                  small
                  noBorders
                  color={String(color?.value)}
                />
              </Grid>
            </Grid>

            <Grid container justifyContent="space-between">
              <Grid item>
                <ProductQuantity
                  quantity={quantity}
                  available={available}
                  onPlus={() => increaseProductQuantityAction(productId)}
                  onMinus={() => decreaseProductQuantityAction(productId)}
                />
              </Grid>

              <Grid item>
                <ProductPrice
                  price={price * quantity}
                  discount={discount * quantity}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

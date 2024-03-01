import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useBoolean } from 'ahooks';

import { ProductColor, ProductPrice, ProductTopSale } from '@/entities/Product';

import { BaseImage, IntlTypography } from '@/shared/components';
import { useClickRedirect, useMediaSizes } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

export const ProductCard = ({ product }: any) => {
  const {
    img,
    name,
    price,
    type,
    discount,
    topSales,
    productId,
  } = product;

  const [handleRedirect] = useClickRedirect();

  const [show, { setTrue, setFalse }] = useBoolean();
  const { isBiggerLg } = useMediaSizes();

  const sizes = product.sizes as { id: string; value: string; }[];
  const colors = product.colors as { id: string; value: string; }[];

  return (
    <Box
      width="100%"
      position="relative"
    >
      <Card
        component="button"
        onMouseOut={isBiggerLg ? setFalse : undefined}
        onMouseOver={isBiggerLg ? setTrue : undefined}
        onClick={handleRedirect(`${Links.CATALOGUE}/${type}/${productId}`)}
        elevation={show ? 1 : 0}
        sx={{
          width: '100%',
          cursor: 'pointer',
          border: 'none',
          background: 'baseWhite.main',
          top: 0,
          position: show ? 'absolute' : 'relative',
          zIndex: show ? 3 : 1,
        }}
      >
        <CardContent>
          <Grid container>
            <Grid item flex={1}>
              <Grid container mb={2} justifyContent="space-between">
                <ProductPrice
                  price={price}
                  discount={discount}
                />

                <ProductTopSale topSales={topSales} />
              </Grid>

              <Grid container>
                <BaseImage
                  fullWidth
                  src={img}
                  alt={name}
                />
              </Grid>

              {show && (
                <>
                  <Grid
                    container
                    mb={1}
                    mt={2}
                    justifyContent="space-between"
                  >
                    <Typography fontWeight={700}>
                      {name}
                    </Typography>

                    <Typography color="text.grey">
                      {productId}
                    </Typography>
                  </Grid>

                  <Grid container mb={1}>
                    <Grid item xs={12} mb={1}>
                      <IntlTypography
                        intl={{ label: 'titles.size' }}
                        fontWeight={700}
                      />
                    </Grid>

                    <Stack spacing={1} direction="row">
                      {sizes.map(({ id, value }) => (
                        <Typography key={id}>
                          {value}
                        </Typography>
                      ))}
                    </Stack>
                  </Grid>

                  <Grid container>
                    <Grid item xs={12} mb={1}>
                      <IntlTypography
                        intl={{ label: 'titles.color' }}
                        fontWeight={700}
                      />
                    </Grid>

                    <Stack spacing={1} direction="row">
                      {colors.map(({ id, value }) => (
                        <ProductColor
                          key={id}
                          color={value}
                        />
                      ))}
                    </Stack>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

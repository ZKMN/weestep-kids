import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

import { ProductColor, ProductPrice, ProductTopSale } from '@/entities/Product';

import { BaseImage, IntlTypography } from '@/shared/components';
import { useClickRedirect } from '@/shared/lib/hooks';
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

  const sizes = product.sizes as { id: string; value: string; }[];
  const colorsAvailable = product.colorsAvailable as { id: string; value: string; }[];

  return (
    <Box
      width="100%"
      height="100%"
      position="relative"
    >
      <Card
        component="button"
        onClick={handleRedirect(`${Links.CATALOGUE}/${type}/${productId}`)}
        elevation={1}
        sx={{
          width: '100%',
          height: '100%',
          cursor: 'pointer',
          border: 'none',
          bgcolor: 'background.paper',
        }}
      >
        <CardContent sx={{ height: '100%' }}>
          <Grid container>
            <Grid item flex={1}>
              <Grid container mb={2} justifyContent="space-between">
                <ProductPrice
                  price={price}
                  discount={discount}
                />

                <ProductTopSale topSales={topSales} />
              </Grid>

              <Grid container mb={2}>
                <BaseImage
                  fullWidth
                  src={img}
                  alt={name}
                />
              </Grid>

              <Grid
                container
                mb={1}
                justifyContent="space-between"
              >
                <Typography fontWeight={700}>
                  {name}
                </Typography>

                <Typography color="text.grey">
                  {productId}
                </Typography>
              </Grid>

              <Grid container>
                <Grid item xs={6}>
                  <IntlTypography
                    mb={1}
                    intl={{ label: 'titles.size' }}
                    color="text.grey"
                    textAlign="left"
                    fontWeight={700}
                  />

                  <Grid container spacing={1}>
                    {sizes.map(({ id, value }) => (
                      <Grid item key={id}>
                        <Typography>
                          {value}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                <Grid item xs={6}>
                  <IntlTypography
                    mb={1}
                    intl={{ label: 'titles.color' }}
                    color="text.grey"
                    textAlign="right"
                    fontWeight={700}
                  />

                  <Grid container spacing={1} justifyContent="flex-end">
                    {colorsAvailable.map(({ id, value }) => (
                      <Grid item key={id}>
                        <ProductColor
                          noBorders
                          key={id}
                          color={value}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

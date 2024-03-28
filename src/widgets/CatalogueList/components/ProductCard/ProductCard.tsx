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
import { IProductShort } from '@/shared/types/product';

export const ProductCard = ({ product }: { product: IProductShort; }) => {
  const {
    img,
    title,
    price,
    sizes,
    shoesType,
    productId,
    colorsAvailable,
    discount_1c: discount,
  } = product;

  const [handleRedirect] = useClickRedirect();

  return (
    <Box
      width="100%"
      height="100%"
      position="relative"
    >
      <Card
        component="button"
        onClick={handleRedirect(`${Links.CATALOGUE}/${shoesType}/${productId}`)}
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

                <ProductTopSale topSales={false} />
              </Grid>

              <Grid container mb={2}>
                <BaseImage
                  priority
                  fullWidth
                  src={img}
                  alt={title}
                />
              </Grid>

              <Typography
                mb={1}
                fontWeight={700}
                textAlign="left"
              >
                {title}
              </Typography>

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
                    {colorsAvailable.map(({ id, color }) => (
                      <Grid item key={id}>
                        <ProductColor
                          noBorders
                          key={id}
                          color={color}
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

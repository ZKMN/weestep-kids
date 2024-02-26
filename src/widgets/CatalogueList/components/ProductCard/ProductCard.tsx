import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useBoolean } from 'ahooks';

import { BaseImage, IntlTypography } from '@/shared/components';
import { getCurrency } from '@/shared/lib/helpers';
import { useClientTranslation } from '@/shared/lib/hooks';

export const ProductCard = ({ product }: any) => {
  const {
    img,
    code,
    name,
    price,
    discount,
    topSales,
    colors,
    sizes,
  } = product;

  const [show, { setTrue, setFalse }] = useBoolean();
  const { translate } = useClientTranslation('typography');

  return (
    <Box position="relative" sx={{ cursor: 'pointer' }}>
      <Card
        onMouseOut={setFalse}
        onMouseOver={setTrue}
        sx={{
          width: '100%',
          position: show ? 'absolute' : 'relative',
          zIndex: show ? 3 : 1,
        }}
        elevation={show ? 1 : 0}
      >
        <CardContent>
          <Grid container>
            <Grid item flex={1}>
              <Grid container mb={2} justifyContent="space-between">
                <Grid item position="relative">
                  <Typography
                    color={discount ? 'primary' : ''}
                    fontSize={18}
                    fontWeight={700}
                  >
                    {getCurrency(price)}
                  </Typography>

                  {!!discount && (
                    <Typography
                      position="absolute"
                      top={-15}
                      right={-30}
                      fontSize={14}
                      sx={{ textDecoration: 'line-through' }}
                      color="text.grey"
                    >
                      {getCurrency(discount)}
                    </Typography>
                  )}
                </Grid>

                {topSales && (
                  <Grid item>
                    <Chip
                      size="small"
                      label={translate('texts.topSale')}
                      color="secondary"
                    />
                  </Grid>
                )}
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
                      {code}
                    </Typography>
                  </Grid>

                  <Grid container mb={1}>
                    <Grid item xs={12}>
                      <IntlTypography
                        intl={{ label: 'titles.sizeLeft' }}
                        fontWeight={700}
                      />
                    </Grid>

                    <Stack spacing={1} direction="row">
                      {sizes.map((size: string) => (
                        <Grid item key={size}>
                          <Typography>
                            {size}
                          </Typography>
                        </Grid>
                      ))}
                    </Stack>
                  </Grid>

                  <Grid container>
                    <Grid item xs={12}>
                      <IntlTypography
                        intl={{ label: 'titles.colors' }}
                        fontWeight={700}
                      />
                    </Grid>

                    <Stack spacing={1} direction="row">
                      {colors.map((color: string) => (
                        <Box
                          key={color}
                          bgcolor={color}
                          width={20}
                          height={20}
                          borderRadius={100}
                          border="1px solid"
                          borderColor="border.main"
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

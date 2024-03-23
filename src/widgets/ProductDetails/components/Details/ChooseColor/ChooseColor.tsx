import React from 'react';
import { Grid } from '@mui/material';

import { ProductColor } from '@/entities/Product';

import { IntlTypography } from '@/shared/components';
import { useClickRedirect, useTypedParams } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

type TColor = { id: string; value: string; productId: string; };

export const ChooseColor = ({ color, colors }: { color: TColor; colors: TColor[]; }) => {
  const { type } = useTypedParams();

  const [handleRedirect] = useClickRedirect();

  return (
    <Grid container mt={2} mb={2}>
      <Grid item xs={12}>
        <Grid container wrap="nowrap" alignItems="center">
          <Grid item xs={4} md={3}>
            <IntlTypography
              intl={{ label: 'titles.color' }}
              color="text.grey"
              variant="h3"
              component="h3"
              fontSize="1.4rem"
              fontWeight={700}
            />
          </Grid>

          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <ProductColor
                  active
                  color={color.value}
                />
              </Grid>

              {colors.map(({ id, value, productId }) => (
                <Grid item key={id}>
                  <ProductColor
                    color={value}
                    onClick={handleRedirect(`${Links.CATALOGUE}/${type}/${productId}`)}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

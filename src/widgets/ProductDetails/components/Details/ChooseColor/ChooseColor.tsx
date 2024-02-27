import React from 'react';
import { Grid } from '@mui/material';
import { useQueryState } from 'nuqs';

import { ProductColor } from '@/entities/Product';

import { IntlTypography } from '@/shared/components';

export const ChooseColor = ({ colors }: { colors: { id: string; value: string; }[]; }) => {
  const [color, setColor] = useQueryState('color');

  return (
    <Grid container mt={2} mb={2}>
      <Grid item xs={12}>
        <Grid container wrap="nowrap" alignItems="center">
          <Grid item xs={3}>
            <IntlTypography
              intl={{ label: 'titles.color' }}
              color="text.grey"
              fontSize="1.5rem"
              fontWeight={700}
              variant="h3"
            />
          </Grid>

          <Grid item>
            <Grid container spacing={1}>
              {colors.map(({ id, value }) => (
                <Grid item key={id}>
                  <ProductColor
                    active={color === id}
                    key={id}
                    color={value}
                    onClick={() => setColor(id)}
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

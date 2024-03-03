import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useQueryState } from 'nuqs';

import { IntlTypography } from '@/shared/components';

export const FootLength = ({ sizes }: { sizes: { id: string; value: string; santimeters: number; }[]; }) => {
  const [sizeId] = useQueryState('sizeId');

  const santimeters = sizes.find(({ id }) => id === sizeId)?.santimeters;

  return (
    <Grid container mb={2}>
      <Grid item xs={12}>
        <Grid container alignItems="center">
          <Grid item xs={4} md={3}>
            <IntlTypography
              intl={{ label: 'titles.foot' }}
              color="text.grey"
              variant="h3"
              fontSize="1.5rem"
              fontWeight={700}
            />
          </Grid>

          <Grid item>
            <Typography
              fontSize="1.5rem"
              fontWeight={700}
            >
              {santimeters}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

import React from 'react';
import { Button, Grid } from '@mui/material';
import { useQueryState } from 'nuqs';

import { IntlTypography } from '@/shared/components';

export const ChooseSize = ({ sizes }: { sizes: { id: string; value: string; }[]; }) => {
  const [size, setSize] = useQueryState('size');

  return (
    <Grid container mb={2}>
      <Grid item xs={12}>
        <Grid container wrap="nowrap" alignItems="center">
          <Grid item xs={3}>
            <IntlTypography
              intl={{ label: 'titles.size' }}
              fontSize="1.5rem"
              fontWeight={700}
              variant="h3"
              color="text.grey"
            />
          </Grid>

          <Grid item>
            <Grid container>
              {sizes.map(({ id, value }) => (
                <Grid item key={id}>
                  <Button
                    size="xLarge"
                    sx={{ minWidth: 45, padding: 0 }}
                    variant={Number(size) === Number(id) ? 'outlined' : 'text'}
                    onClick={() => setSize(id)}
                  >
                    {value}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

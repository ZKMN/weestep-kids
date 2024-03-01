import React, { useEffect } from 'react';
import { Button, Grid } from '@mui/material';
import { useQueryState } from 'nuqs';

import { IntlTypography } from '@/shared/components';

export const ChooseSize = ({ sizes }: { sizes: { id: string; value: string; }[]; }) => {
  const [size, setSize] = useQueryState('size');

  useEffect(() => {
    if (sizes) {
      setSize(sizes[0].id);
    }
  }, [sizes]);

  return (
    <Grid container mb={2}>
      <Grid item xs={12}>
        <Grid container wrap="nowrap" alignItems="center">
          <Grid item xs={4} md={3}>
            <IntlTypography
              intl={{ label: 'titles.size' }}
              color="text.grey"
              variant="h3"
              fontSize="1.5rem"
              fontWeight={700}
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

import React, { Dispatch } from 'react';
import { Button, Grid } from '@mui/material';

import { IntlTypography } from '@/shared/components';
import { useMediaSizes } from '@/shared/lib/hooks';

export const ChooseSize = ({
  sizes,
  size,
  setSize,
}: {
  size: string;
  sizes: string[];
  setSize: Dispatch<string>;
}) => {
  const { isLessMd } = useMediaSizes();

  return (
    <Grid container mb={2}>
      <Grid item>
        <Grid container spacing={3} wrap="nowrap" alignItems="center">
          <Grid item>
            <IntlTypography
              intl={{ label: 'titles.size' }}
              fontSize={isLessMd ? '1.5rem' : '2rem'}
              fontWeight={700}
              variant="h3"
            />
          </Grid>

          <Grid item>
            <Grid container>
              {sizes.map((sz: string) => (
                <Grid item key={sz}>
                  <Button
                    size="xLarge"
                    sx={{ minWidth: 45, padding: 0 }}
                    color={size === sz ? 'primary' : 'baseGrey'}
                    onClick={() => setSize(sz)}
                  >
                    {sz}
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

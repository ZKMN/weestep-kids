import React, { Dispatch } from 'react';
import { Grid } from '@mui/material';

import { ProductColor } from '@/entities/Product';

import { IntlTypography } from '@/shared/components';
import { useMediaSizes } from '@/shared/lib/hooks';

export const ChooseColor = ({
  color,
  colors,
  setColor,
}: {
  color: string;
  colors: string[];
  setColor: Dispatch<string>;
}) => {
  const { isLessMd } = useMediaSizes();

  return (
    <Grid container mt={2}>
      <Grid item>
        <Grid container spacing={3} wrap="nowrap" alignItems="center">
          <Grid item>
            <IntlTypography
              intl={{ label: 'titles.color' }}
              fontSize={isLessMd ? '1.5rem' : '2rem'}
              fontWeight={700}
              variant="h3"
            />
          </Grid>

          <Grid item>
            <Grid container spacing={1}>
              {colors.map((col: string) => (
                <Grid item key={col}>
                  <ProductColor
                    active={color === col}
                    key={col}
                    color={col}
                    onClick={() => setColor(col)}
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

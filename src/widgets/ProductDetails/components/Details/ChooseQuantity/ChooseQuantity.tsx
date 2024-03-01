import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useQueryState } from 'nuqs';

import { ProductQuantity } from '@/entities/Product';

import { IntlTypography } from '@/shared/components';

export const ChooseQuantity = ({ available }: { available: number; }) => {
  const [quantity, setQuantity] = useQueryState('quantity');

  useEffect(() => {
    if (!quantity) {
      setQuantity('1');
    }

    if (Number(quantity) > available) {
      setQuantity(String(available));
    }
  }, [quantity]);

  return (
    <Grid container mt={2}>
      <Grid item xs={12}>
        <Grid container wrap="nowrap" alignItems="center">
          <Grid item xs={5} md={3}>
            <IntlTypography
              intl={{ label: 'titles.quantity' }}
              color="text.grey"
              variant="h3"
              fontSize="1.5rem"
              fontWeight={700}
            />
          </Grid>

          <Grid item xs={5} sm={3}>
            <ProductQuantity
              quantity={Number(quantity)}
              available={available}
              onPlus={() => setQuantity(String(Number(quantity) + 1))}
              onMinus={() => setQuantity(String(Number(quantity) - 1))}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

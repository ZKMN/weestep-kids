import React, { useEffect } from 'react';
import { Add, Remove } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { useQueryState } from 'nuqs';

import { IntlTypography } from '@/shared/components';

export const ChooseQuantity = ({ available }: { available: number; }) => {
  const [quantity, setQuantity] = useQueryState('quantity');

  const disabled = available === Number(quantity);

  useEffect(() => {
    if (!quantity) {
      setQuantity('1');
    }

    if (Number(quantity) > available) {
      setQuantity(String(available));
    }
  }, []);

  return (
    <Grid container mt={2}>
      <Grid item xs={12}>
        <Grid container wrap="nowrap" alignItems="center">
          <Grid item xs={5} sm={3}>
            <IntlTypography
              intl={{ label: 'titles.quantity' }}
              color="text.grey"
              fontSize="1.5rem"
              fontWeight={700}
              variant="h3"
            />
          </Grid>

          <Grid item xs={5} sm={3}>
            <Grid
              container
              height={40}
              border="1px solid"
              borderColor="border.main"
              borderRadius="8px"
            >
              <Grid
                item
                sx={{ cursor: Number(quantity) === 1 ? 'default' : 'pointer' }}
                flex={1}
                disabled={Number(quantity) === 1}
                component="button"
                bgcolor="transparent"
                border="none"
                borderRight="1px solid"
                borderColor="border.main"
                onClick={() => setQuantity(String(Number(quantity) - 1))}
              >
                <Grid
                  container
                  height="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Remove />
                </Grid>
              </Grid>

              <Grid item flex={1}>
                <Grid
                  container
                  height="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  {quantity}
                </Grid>
              </Grid>

              <Grid
                item
                sx={{ cursor: disabled ? 'default' : 'pointer' }}
                flex={1}
                component="button"
                bgcolor="transparent"
                border="none"
                borderLeft="1px solid"
                borderColor="border.main"
                onClick={() => setQuantity(String(Number(quantity) + 1))}
                disabled={disabled}
              >
                <Grid
                  container
                  height="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Add />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

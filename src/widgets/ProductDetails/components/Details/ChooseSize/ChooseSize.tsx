import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { useQueryState } from 'nuqs';

import { IntlTypography } from '@/shared/components';

export const ChooseSize = ({ sizes }: { sizes: { id: string; value: string; santimeters:number; }[]; }) => {
  const [sizeId, setSizeId] = useQueryState('sizeId');

  useEffect(() => {
    if (sizes) {
      setSizeId(sizes[0].id);
    }
  }, [sizes]);

  return (
    <Grid container mt={2} mb={2}>
      <Grid item xs={12}>
        <Grid container wrap="nowrap" alignItems="center">
          <Grid item xs={4} md={3}>
            <IntlTypography
              intl={{ label: 'titles.size' }}
              color="text.grey"
              variant="h3"
              fontSize="1.4rem"
              fontWeight={700}
            />
          </Grid>

          <Grid item>
            <Grid container spacing={1}>
              {sizes.map(({ id, value }) => (
                <Grid item key={id}>
                  <Box
                    sx={{ cursor: 'pointer', outline: Number(sizeId) === Number(id) ? '2px solid #FF7C2A' : 'none' }}
                    onClick={() => setSizeId(id)}
                    width="100%"
                    bgcolor="background.paper"
                    padding={0.5}
                    border="none"
                    borderRadius={1}
                    fontSize="1.2rem"
                    component="button"
                  >
                    {value}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

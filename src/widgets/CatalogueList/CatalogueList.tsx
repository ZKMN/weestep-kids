'use client';

import React from 'react';
import { Box, Grid } from '@mui/material';

import { useMediaSizes } from '@/shared/lib/hooks';

import { Filters, RemoveFilters, SortBy } from './components';

export const CatalogueList = () => {
  const { isLessMd, isBiggerMd } = useMediaSizes();

  return (
    <Box mt={3}>
      <Grid container justifyContent="space-between">
        <Grid item flex={1}>
          <RemoveFilters />
        </Grid>

        {isBiggerMd && (
          <Grid item xs={2}>
            <SortBy />
          </Grid>
        )}
      </Grid>

      <Grid container>
        <Grid item xs={12} md={3} lg={2}>
          <Box component="section" width="100%">
            <Grid container spacing={{ xs: 1 }}>
              <Grid item xs={6} md={12}>
                <Filters />
              </Grid>

              {isLessMd && (
                <Grid item xs={6}>
                  <SortBy />
                </Grid>
              )}
            </Grid>
          </Box>
        </Grid>

        <Grid item flex={1}>
          <Box component="section" width="100%">
            List
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

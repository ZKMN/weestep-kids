'use client';

import React, { Suspense } from 'react';
import { Close } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import { keys, map } from 'lodash';
import { useSearchParams } from 'next/navigation';
import queryString from 'query-string';

import { Loading } from '@/shared/components';
import { useMediaSizes } from '@/shared/lib/hooks';

import { useChangeFilter } from '../../lib/hooks';
import { ClearAllFiltersButton } from '../ClearAllFiltersButton';

const RemoveFiltersComponent = () => {
  const searchParams = useSearchParams();

  const { isBiggerMd, isLessMd } = useMediaSizes();
  const handleRemoveFilter = useChangeFilter();

  const parsed = queryString.parse(searchParams.toString(), { arrayFormat: 'comma' });

  const parsedKeys = keys(parsed);

  if (!parsedKeys.length || isLessMd) {
    return null;
  }

  return (
    <Grid container spacing={1}>
      {map(parsedKeys, (key) => {
        if (Array.isArray(parsed[key])) {
          return map(parsed[key], (value) => (
            <Grid item key={value}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                onClick={handleRemoveFilter(key, String(value))}
                endIcon={<Close />}
              >
                {value}
              </Button>
            </Grid>
          ));
        }

        return (
          <Grid item key={key}>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              onClick={handleRemoveFilter(key, String(parsed[key]))}
              endIcon={<Close />}
            >
              {parsed[key]}
            </Button>
          </Grid>
        );
      })}

      {isBiggerMd && parsedKeys.length >= 2 && <ClearAllFiltersButton />}
    </Grid>
  );
};

export const RemoveFilters = () => (
  <Suspense
    fallback={(
      <div style={{ height: 200, width: '100%' }}>
        <Loading loading />
      </div>
  )}
  >
    <RemoveFiltersComponent />
  </Suspense>
);

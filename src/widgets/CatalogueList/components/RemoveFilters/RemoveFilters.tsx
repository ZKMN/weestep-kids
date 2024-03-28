'use client';

import React from 'react';
import { Close } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import { keys, map, upperFirst } from 'lodash';
import { useSearchParams } from 'next/navigation';
import queryString from 'query-string';

import { useMediaSizes } from '@/shared/lib/hooks';

import { useChangeFilter } from '../../lib/hooks';
import { ClearAllFiltersButton } from '../ClearAllFiltersButton';

export const RemoveFilters = () => {
  const searchParams = useSearchParams();

  const { isBiggerMd, isLessMd } = useMediaSizes();
  const handleRemoveFilter = useChangeFilter();

  const parsed = queryString.parse(searchParams.toString(), { arrayFormat: 'comma' });

  const parsedKeys = keys(parsed).filter((key) => key !== 'pagina');

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
                variant="outlined"
                color="secondary"
                onClick={handleRemoveFilter(key, String(value))}
                endIcon={<Close />}
              >
                {upperFirst(String(value))}
              </Button>
            </Grid>
          ));
        }

        return (
          <Grid item key={key}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleRemoveFilter(key, String(parsed[key]))}
              endIcon={<Close />}
            >
              {upperFirst(String(parsed[key]))}
            </Button>
          </Grid>
        );
      })}

      {isBiggerMd && !!parsedKeys.length && <ClearAllFiltersButton />}
    </Grid>
  );
};

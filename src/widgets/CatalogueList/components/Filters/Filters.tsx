'use client';

import React, { Suspense } from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material';
import { useSearchParams } from 'next/navigation';

import { breakpoints } from '@/shared/assets';
import { BaseCollapse, Loading } from '@/shared/components';

import { useChangeFilter } from '../../lib/hooks';

const filters = [{
  title: 'Gender',
  category: 'gender',
  values: [{
    name: 'Male',
    value: 'male',
    count: 1,
  }, {
    name: 'Woman',
    value: 'woman',
    count: 1,
  }],
}, {
  title: 'Color',
  category: 'color',
  values: [{
    name: 'Red',
    value: 'red',
    count: 1,
  }, {
    name: 'Yellow',
    value: 'yellow',
    count: 1,
  }],
}, {
  title: 'Size',
  category: 'size',
  values: [{
    name: '22',
    value: '22',
    count: 1,
  }, {
    name: '23',
    value: '23',
    count: 1,
  }],
}, {
  title: 'Type',
  category: 'type',
  values: [{
    name: 'Sneakers',
    value: 'sneakers',
    count: 1,
  }, {
    name: 'Boots',
    value: 'boots',
    count: 1,
  }],
}];

const FiltersComponent = () => {
  const searchParams = useSearchParams();

  const handleChangeCategory = useChangeFilter();

  return filters.map(({ title, category, values }) => (
    <Grid container key={title}>
      <BaseCollapse title={title}>
        {values.map(({ name, value, count }) => (
          <Grid container key={name}>
            <FormControlLabel
              label={(
                <Grid container alignItems="center">
                  <Typography mr={1}>
                    {name}
                  </Typography>

                  <Typography color="text.grey" fontSize={12}>
                    {`(${count})`}
                  </Typography>
                </Grid>
              )}
              control={(
                <Checkbox
                  size="small"
                  color="primary"
                  checked={!!searchParams.get(category)?.includes(value)}
                  onChange={handleChangeCategory(category, value)}
                />
              )}
            />
          </Grid>
        ))}
      </BaseCollapse>
    </Grid>
  ));
};

export const Filters = () => (
  <Suspense
    fallback={(
      <div style={{ height: 200, width: '100%' }}>
        <Loading loading />
      </div>
    )}
  >
    <Box
      sx={{
        [breakpoints.down('md')]: {
          display: 'none',
        },
      }}
    >
      <FiltersComponent />
    </Box>
  </Suspense>
);

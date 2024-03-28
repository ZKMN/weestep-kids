'use client';

import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material';
import { useSearchParams } from 'next/navigation';

import { BaseCollapse } from '@/shared/components';

import { useChangeFilter } from '../../lib/hooks';

const filters = [{
  title: 'Gender',
  category: 'género',
  values: [{
    name: 'Boys',
    value: 'niños',
    count: 1,
  }, {
    name: 'Girls',
    value: 'niñas',
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

export const Filters = () => {
  const searchParams = useSearchParams();

  const handleChangeCategory = useChangeFilter();

  return filters.map(({ title, category, values }) => (
    <Grid container key={title}>
      <BaseCollapse title={title}>
        {values.map(({ name, value, count }) => (
          <Grid container key={name}>
            <FormControlLabel
              name={name}
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

'use client';

import React, { Suspense } from 'react';
import {
  Checkbox, FormControlLabel, Grid, Typography,
} from '@mui/material';
import { useBoolean } from 'ahooks';
import { useSearchParams } from 'next/navigation';

import {
  BaseCollapse,
  BaseDrawer,
  IntlButton,
  Loading,
} from '@/shared/components';
import { useMediaSizes } from '@/shared/lib/hooks';

import { useChangeFilter } from '../../lib/hooks';
import { ClearAllFiltersButton } from '../ClearAllFiltersButton';

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

  const { isLessMd } = useMediaSizes();
  const [isOpen, { setTrue, setFalse }] = useBoolean();

  const handleChangeCategory = useChangeFilter();

  const allFilters = filters.map(({ title, category, values }) => (
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

  if (isLessMd) {
    return (
      <>
        <IntlButton
          sx={{ height: '100%' }}
          size="small"
          intl={{ label: 'filters' }}
          color="secondary"
          onClick={setTrue}
        />

        <BaseDrawer
          open={isOpen}
          anchor="left"
          onClose={setFalse}
          titleIntl="titles.filters"
          titleExtraNode={<ClearAllFiltersButton />}
        >
          {allFilters}
        </BaseDrawer>
      </>
    );
  }

  return allFilters;
};

export const Filters = () => (
  <Suspense
    fallback={(
      <div style={{ height: 200, width: '100%' }}>
        <Loading loading />
      </div>
    )}
  >
    <FiltersComponent />
  </Suspense>
);

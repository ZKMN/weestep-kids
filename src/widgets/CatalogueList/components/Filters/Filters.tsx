'use client';

import React from 'react';
import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import { useBoolean } from 'ahooks';
import { useSearchParams } from 'next/navigation';

import { BaseCollapse, BaseDrawer, IntlButton } from '@/shared/components';
import { useMediaSizes } from '@/shared/lib/hooks';

import { useChangeFilter } from '../../lib/hooks';
import { ClearAllFiltersButton } from '../ClearAllFiltersButton';

const filters = [{
  title: 'Gender',
  category: 'gender',
  values: [{
    name: 'Male',
    value: 'male',
  }, {
    name: 'Woman',
    value: 'woman',
  }],
}, {
  title: 'Color',
  category: 'color',
  values: [{
    name: 'Red',
    value: 'red',
  }, {
    name: 'Yellow',
    value: 'yellow',
  }],
}, {
  title: 'Size',
  category: 'size',
  values: [{
    name: '22',
    value: '22',
  }, {
    name: '23',
    value: '23',
  }],
}, {
  title: 'Type',
  category: 'type',
  values: [{
    name: 'Sneakers',
    value: 'sneakers',
  }, {
    name: 'Boots',
    value: 'boots',
  }],
}];

export const Filters = () => {
  const searchParams = useSearchParams();

  const { isLessMd } = useMediaSizes();
  const [isOpen, { setTrue, setFalse }] = useBoolean();

  const handleChangeCategory = useChangeFilter();

  const allFilters = filters.map(({ title, category, values }) => (
    <Grid container key={title}>
      <BaseCollapse title={title}>
        {values.map(({ name, value }) => (
          <Grid container key={name}>
            <FormControlLabel
              label={name}
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

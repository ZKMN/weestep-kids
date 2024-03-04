import React from 'react';
import { Box } from '@mui/material';
import { useBoolean } from 'ahooks';

import { breakpoints } from '@/shared/assets';
import { BaseDrawer, IntlButton } from '@/shared/components';

import { Filters } from '.';

import { ClearAllFiltersButton } from '../ClearAllFiltersButton';

export const FiltersDrawer = () => {
  const [isOpen, { setTrue, setFalse }] = useBoolean();

  return (
    <Box
      sx={{
        [breakpoints.up('md')]: {
          display: 'none',
        },
      }}
    >
      <IntlButton
        sx={{ height: '100%' }}
        intl={{ label: 'filters' }}
        color="secondary"
        onClick={setTrue}
      />

      <BaseDrawer
        open={isOpen}
        anchor="left"
        onClose={setFalse}
        titleIntl={{ label: 'titles.filters' }}
        titleExtraNode={<ClearAllFiltersButton />}
      >
        <Filters />
      </BaseDrawer>
    </Box>
  );
};

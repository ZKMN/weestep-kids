import React from 'react';
import { Grid } from '@mui/material';

import { IntlButton } from '@/shared/components';
import { useClickRedirect } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

export const ClearAllFiltersButton = () => {
  const [handlePush] = useClickRedirect();

  return (
    <Grid item>
      <IntlButton
        size="small"
        intl={{ label: 'clearFilters' }}
        color="secondary"
        onClick={handlePush(Links.CATALOGUE)}
      />
    </Grid>
  );
};

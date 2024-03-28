import React from 'react';
import { Grid } from '@mui/material';
import { useSearchParams } from 'next/navigation';

import { IntlButton } from '@/shared/components';
import { useClickRedirect } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

export const ClearAllFiltersButton = () => {
  const searchParams = useSearchParams();

  const [handlePush] = useClickRedirect();

  const page = searchParams.get('pagina');

  return (
    <Grid item>
      <IntlButton
        intl={{ label: 'clearFilters' }}
        color="secondary"
        onClick={handlePush(`${Links.CATALOGUE}?pagina=${page}`)}
        disabled={!searchParams.toString()}
      />
    </Grid>
  );
};

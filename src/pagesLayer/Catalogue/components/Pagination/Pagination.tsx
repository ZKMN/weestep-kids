'use client';

import React, { useEffect } from 'react';
import { Pagination as MUIPagination } from '@mui/material';

import { PRODUCTS_COUNT } from '@/shared/consts';
import { useMediaSizes, useURLQueryState } from '@/shared/lib/hooks';

export const Pagination = ({ total }: { total: number; }) => {
  const { isLessSm } = useMediaSizes();
  const [handlePushQueryURL, queryParams] = useURLQueryState();

  const page = queryParams.get('pagina');

  useEffect(() => {
    if (!page) {
      queryParams.set('pagina', '1');
    }

    handlePushQueryURL();
  }, []);

  return (
    <MUIPagination
      sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
      size={isLessSm ? 'small' : 'large'}
      page={Number(page)}
      color="secondary"
      shape="rounded"
      count={Math.trunc(Number(total) / PRODUCTS_COUNT)}
      onChange={(_, page) => {
        queryParams.set('pagina', String(page));

        handlePushQueryURL();
      }}
    />
  );
};

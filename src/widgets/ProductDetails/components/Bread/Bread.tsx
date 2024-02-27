'use client';

import React from 'react';
import { Breadcrumbs, Button, Typography } from '@mui/material';
import { startCase, toLower, upperFirst } from 'lodash';

import { useClickRedirect, useClientTranslation, useTypedParams } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

export const Bread = () => {
  const { productId, category } = useTypedParams();
  const { translate } = useClientTranslation('common');
  const [handleRedirect] = useClickRedirect();

  return (
    <Breadcrumbs>
      <Button
        size="small"
        variant="text"
        onClick={handleRedirect(Links.CATALOGUE)}
      >
        {upperFirst(translate('menu.catalogue'))}
      </Button>

      <Typography color="text.grey">{startCase(toLower(category))}</Typography>

      <Typography color="text.grey">{productId}</Typography>
    </Breadcrumbs>
  );
};

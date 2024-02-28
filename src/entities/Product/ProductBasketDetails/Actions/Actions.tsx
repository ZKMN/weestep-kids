import React from 'react';
import { Delete, Edit, MoreVert } from '@mui/icons-material';
import { Grid } from '@mui/material';

import { BasePopup, IntlButton } from '@/shared/components';
import { addQueryParamsToURL } from '@/shared/lib/helpers';
import { useLngRouter } from '@/shared/lib/hooks';
import { removeProductFromLocalBasketAction } from '@/shared/lib/store';
import { IBasketProduct, Links } from '@/shared/types';

export const Actions = ({
  type,
  sizeId,
  colorId,
  quantity,
  productId,
  setFalse,
}: Pick<IBasketProduct, 'type' | 'quantity' | 'productId'> & { sizeId?: string; colorId?: string; setFalse: () => void; }) => {
  const [handleRedirect] = useLngRouter();

  return (
    <BasePopup icon={<MoreVert />}>
      <Grid container justifyContent="flex-start">
        <Grid item>
          <IntlButton
            sx={{ p: 0, minWidth: 'auto' }}
            size="small"
            intl={{ label: 'edit' }}
            variant="text"
            startIcon={<Edit />}
            onClick={() => {
              setFalse();
              handleRedirect(
                addQueryParamsToURL(
                  `${Links.CATALOGUE}/${type}/${productId}`,
                  {
                    quantity,
                    edit: true,
                    size: sizeId,
                    color: colorId,
                  },
                ),
              );
            }}
          />
        </Grid>

        <Grid item>
          <IntlButton
            sx={{ p: 0, minWidth: 'auto' }}
            size="small"
            intl={{ label: 'remove' }}
            color="error"
            variant="text"
            startIcon={<Delete />}
            onClick={() => removeProductFromLocalBasketAction(productId)}
          />
        </Grid>
      </Grid>
    </BasePopup>
  );
};

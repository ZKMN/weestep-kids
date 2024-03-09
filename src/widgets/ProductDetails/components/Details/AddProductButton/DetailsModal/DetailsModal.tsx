import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';

import { ProductBasketDetails } from '@/entities/Product';

import { BaseDialog, IntlButton } from '@/shared/components';
import { getCurrency, getProductsPrice, getProductsQuantity } from '@/shared/lib/helpers';
import { useClickRedirect } from '@/shared/lib/hooks';
import { localBasketStore } from '@/shared/lib/store';
import { IBaseDialogProps, Links } from '@/shared/types';

export const DetailsModal = ({ isOpen, onClose }: Pick<IBaseDialogProps, 'isOpen' | 'onClose'>) => {
  const products = localBasketStore((state) => state.products);

  const [handleRedirect] = useClickRedirect();

  useEffect(() => {
    if (!products?.length) {
      onClose?.();
    }
  }, [products]);

  const price = getProductsPrice(products);
  const quantity = getProductsQuantity(products);

  return (
    <BaseDialog
      fullWidth
      isOpen={isOpen}
      maxWidth="xs"
      titleIntl={{ label: 'titles.orderSummary' }}
      titleExtraNode={(
        <Typography
          color="text.white"
          fontSize={18}
          fontWeight={700}
        >
          {`(${quantity})`}
          {' '}
          {getCurrency(price)}
        </Typography>
      )}
      footer={(
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <IntlButton
              intl={{ label: 'checkout' }}
              color="secondary"
              variant="outlined"
              onClick={handleRedirect(Links.CHECKOUT)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <IntlButton
              intl={{ label: 'continueShopping' }}
              onClick={handleRedirect(Links.CATALOGUE)}
            />
          </Grid>
        </Grid>
      )}
    >
      <Grid container spacing={1}>
        {products?.map((product) => (
          <Grid item key={product.productId} xs={12}>
            <ProductBasketDetails
              product={product}
              onEdit={onClose}
            />
          </Grid>
        ))}
      </Grid>
    </BaseDialog>
  );
};

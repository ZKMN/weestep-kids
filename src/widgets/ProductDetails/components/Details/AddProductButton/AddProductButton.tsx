import React from 'react';
import { Box } from '@mui/material';
import { useBoolean } from 'ahooks';
import { useSearchParams } from 'next/navigation';

import { IntlButton } from '@/shared/components';
import { useTypedParams } from '@/shared/lib/hooks';
import { addProductToLocalBasketAction } from '@/shared/lib/store';
import { IBasketProduct } from '@/shared/types';

import { DetailsModal } from './DetailsModal';

export const AddProductButton = ({
  type,
  name,
  price,
  image,
  sizes,
  colors,
  discount,
  available,
}: Pick<IBasketProduct, 'name' | 'price' | 'image' | 'available' | 'type' | 'discount'> & { sizes: []; colors: []; }) => {
  const [isOpen, { setTrue, setFalse }] = useBoolean();

  const search = useSearchParams();
  const { productId } = useTypedParams();

  const edit = search.get('edit');
  const sizeId = search.get('size');
  const colorId = search.get('color');
  const quantity = search.get('quantity');

  const size = sizes.find(({ id }) => id === sizeId);
  const color = colors.find(({ id }) => id === colorId);

  const basketProduct = {
    type,
    name,
    size,
    color,
    image,
    price,
    discount,
    productId,
    available,
    quantity: Number(quantity),
  };

  return (
    <Box
      display="flex"
      padding="8px 0"
      width="100%"
      position="sticky"
      bottom={0}
      bgcolor="background.default"
      justifyContent="flex-end"
    >
      <DetailsModal
        isOpen={isOpen}
        setFalse={setFalse}
      />

      <IntlButton
        sx={{ width: 'max-content' }}
        intl={{ label: edit ? 'confirm' : 'addToCart' }}
        disabled={!sizeId || !colorId}
        onClick={() => {
          setTrue();
          addProductToLocalBasketAction(basketProduct);
        }}
      />
    </Box>
  );
};

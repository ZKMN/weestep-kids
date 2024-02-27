import React from 'react';
import { useSearchParams } from 'next/navigation';

import { IntlButton } from '@/shared/components';
import { useTypedParams } from '@/shared/lib/hooks';
import { addProductToLocalBasketAction } from '@/shared/lib/store';

export const AddProductButton = ({ price, image }: { price: number; image: string; }) => {
  const search = useSearchParams();
  const { productId } = useTypedParams();

  const sizeId = search.get('size');
  const colorId = search.get('color');
  const quantity = search.get('quantity');

  return (
    <IntlButton
      intl={{ label: 'addToCart' }}
      disabled={!sizeId || !colorId}
      onClick={() => addProductToLocalBasketAction({
        image,
        price,
        sizeId,
        colorId,
        productId,
        quantity: Number(quantity),
      })}
    />
  );
};

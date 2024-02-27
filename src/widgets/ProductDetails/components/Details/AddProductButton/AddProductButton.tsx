import React from 'react';
import { useSearchParams } from 'next/navigation';

import { IntlButton } from '@/shared/components';
import { useTypedParams } from '@/shared/lib/hooks';
import { addProductToLocalBasketAction } from '@/shared/lib/store';
import { IProduct } from '@/shared/types';

export const AddProductButton = ({ name, price, image }: Pick<IProduct, 'name' | 'price' | 'image'>) => {
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
        name,
        image,
        price,
        productId,
        sizeId: String(sizeId),
        colorId: String(colorId),
        quantity: Number(quantity),
      })}
    />
  );
};

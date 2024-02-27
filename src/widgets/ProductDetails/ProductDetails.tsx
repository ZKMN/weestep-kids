import React from 'react';

import { Bread, Details } from './components';

export const ProductDetails = () => {
  const product = {
    images: [
      'https://weestep-kids.es/media/cache/38/27/382776f060c825d466cccb37fabbaaad.jpg',
      'https://weestep-kids.es/media/cache/6d/a0/6da0fd739bbae633484e16a1c2cc30a0.jpg',
      'https://weestep-kids.es/media/cache/b8/db/b8db5579483ac5a92b3d9b9add3f75ba.jpg',
    ],
    name: 'Product A',
    price: 29.99,
    discount: 10,
    topSales: true,
    colors: ['#FF0000', '#0000FF', '#00FF00'],
    sizes: [22, 23, 24, 25, 26, 27, 28],
    type: 'kids-shoes',
    productId: 'ABC123',
    details: {
      material: 'leather / eco-leather',
      deisgn: '',
      benefits: '',
    },
    youMayLike: [],
  };

  return (
    <div>
      <Bread />

      <Details product={product} />
    </div>
  );
};

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
    available: 2,
    type: 'kids-shoes',
    productId: 'ABC123',
    youMayLike: [],
    colors: [{
      id: '1',
      value: '#FF0000',
    }, {
      id: '2',
      value: '#0000FF',
    }, {
      id: '3',
      value: '#00FF00',
    }],
    sizes: [{
      id: '1',
      value: 22,
    }, {
      id: '2',
      value: 23,
    }, {
      id: '3',
      value: 24,
    }, {
      id: '4',
      value: 25,
    }, {
      id: '5',
      value: 26,
    }],
    details: [{
      title: 'Material',
      value: 'leather / eco-leather',
    }, {
      title: 'Design',
      value: '',
    }, {
      title: 'Benefits',
      value: '',
    }],
  };

  return (
    <div>
      <Bread />

      <Details product={product} />
    </div>
  );
};

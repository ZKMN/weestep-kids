'use client';

import React from 'react';
import Slider from 'react-slick';

import { BaseImage } from '@/shared/components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carousel = ({ images }: { images: string[];}) => (
  <Slider
    dots
    infinite
    autoplay
    vertical
    verticalSwiping
    speed={1000}
    slidesToShow={1}
    slidesToScroll={1}
  >
    {images.map((imgSrc) => (
      <BaseImage
        key={imgSrc}
        fullWidth
        src={imgSrc}
        alt="Product"
        objectFit="contain"
      />
    ))}
  </Slider>
);

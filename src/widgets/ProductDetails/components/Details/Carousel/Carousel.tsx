'use client';

import React from 'react';
import Slider from 'react-slick';

import { BaseImage } from '@/shared/components';

export const Carousel = ({ images }: { images: string[];}) => (
  <Slider
    dots
    infinite
    autoplay
    vertical
    verticalSwiping
    speed={2000}
    arrows={false}
    slidesToShow={1}
    slidesToScroll={1}
    autoplaySpeed={4000}
    dotsClass="slick-dots slick-thumb-custom"
    customPaging={(i) => (
      <BaseImage
        width={50}
        height={50}
        src={images[i]}
        alt="Product"
        objectFit="contain"
      />
    )}
  >
    {images.map((imgSrc) => (
      <BaseImage
        fullWidth
        key={imgSrc}
        src={imgSrc}
        alt="Product"
        objectFit="contain"
      />
    ))}
  </Slider>
);

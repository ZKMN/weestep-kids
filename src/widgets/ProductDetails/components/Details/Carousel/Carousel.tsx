'use client';

import React from 'react';
import {
  Autoplay,
  Keyboard,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BaseImage } from '@/shared/components';

import 'swiper/css/pagination';

import 'swiper/css';

export const Carousel = ({ images }: { images: string[];}) => (
  <Swiper
    loop
    grabCursor
    modules={[Keyboard, Pagination, Autoplay]}
    speed={2000}
    slidesPerView={1}
    slidesPerGroupSkip={1}
    keyboard={{ enabled: true }}
    pagination={{ dynamicBullets: true }}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
  >
    {images.map((imgSrc) => (
      <SwiperSlide key={imgSrc}>
        <BaseImage
          fullWidth
          src={imgSrc}
          alt="Product"
          objectFit="contain"
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

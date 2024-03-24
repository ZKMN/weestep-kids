'use client';

import React from 'react';
import { Box } from '@mui/material';
import Image, { ImageLoaderProps, ImageProps } from 'next/image';

import { getBase64 } from '@/shared/lib/helpers';

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => `${src}?w=${width}&q=${quality || 75}`;

const shimmer = (w: ImageProps['width'], h: ImageProps['height']) => (
  `<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#F9F8F2" offset="20%" />
        <stop stop-color="#E5E5E5" offset="50%" />
        <stop stop-color="#F9F8F2" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#F9F8F2" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`
);

interface IImg {
  width?: ImageProps['width'];
  height?: ImageProps['width'];
  pointer?: boolean;
  fullWidth?: boolean;
  objectFit?: React.CSSProperties['objectFit'];
}

export const BaseImage = ({
  src,
  alt,
  width,
  height,
  pointer,
  priority,
  objectFit,
  fullWidth,
  className,
  onClick,
}: Omit<ImageProps, 'objectFit' | 'width' | 'height'> & IImg) => {
  if (fullWidth) {
    return (
      <Image
        src={src}
        alt={alt}
        sizes="100vw"
        width={0}
        height={0}
        loader={imageLoader}
        onClick={onClick}
        priority={priority}
        style={{
          objectFit: objectFit || 'cover',
          cursor: pointer ? 'pointer' : '',
          width: '100%',
          height: 'auto',
        }}
      />
    );
  }

  if (className) {
    return (
      <Box className={className}>
        <Image
          width={0}
          height={0}
          alt={alt}
          src={src}
          onClick={onClick}
          style={{
            objectFit: 'contain',
            cursor: pointer ? 'pointer' : '',
            width: '100%',
            height: 'auto',
          }}
        />
      </Box>
    );
  }

  return (
    <Box
      width={width}
      height={height}
      position="relative"
    >
      <Image
        fill
        src={src}
        alt={alt}
        sizes={`${width}px`}
        style={{ objectFit: objectFit || 'cover', cursor: pointer ? 'pointer' : '' }}
        loader={imageLoader}
        onClick={onClick}
        priority={priority}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${getBase64(shimmer(width, height))}`}
      />
    </Box>
  );
};

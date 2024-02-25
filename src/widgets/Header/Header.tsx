'use client';

import { useRef } from 'react';
import { Box, Grid } from '@mui/material';
import { useSize } from 'ahooks';

import { BaseContainer, BaseImage, IntlTypography } from '@/shared/components';
import { useClickRedirect, useMediaSizes } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

import {
  Cart,
  DrawerMenu,
  LanguageSelector,
  Navigation,
  PhoneNumber,
} from './components';

export const Header = () => {
  const ref = useRef();
  const size = useSize(ref);
  const [handleRedirect] = useClickRedirect();

  const {
    isLessMd,
    isLessLg,
    isLessSm,
    isBiggerMd,
    isBiggerSm,
  } = useMediaSizes();

  return (
    <>
      <Box minHeight={size?.height} />

      <Box
        ref={ref}
        width="100%"
        padding={isLessMd ? '10px 0' : '20px 0'}
        bgcolor="baseWhite.main"
        borderBottom="1px solid"
        borderColor="border.main"
        component="header"
        position="fixed"
        zIndex="5"
      >
        <BaseContainer>
          <Box component="section">
            <Grid
              container
              justifyContent="space-between"
            >
              <Grid item>
                <BaseImage
                  pointer
                  priority
                  src={isLessLg ? '/images/logo-short.svg' : '/images/logo.svg'}
                  alt="Weestep Kids"
                  width={isLessLg ? 150 : 425}
                  height={40}
                  onClick={handleRedirect(Links.CATALOGUE)}
                  objectFit="contain"
                />

                {isBiggerMd && (
                  <IntlTypography
                    intl={{ label: 'texts.headerUnderLogo' }}
                    fontSize="17px"
                  />
                )}
              </Grid>

              <Grid item flex={1}>
                <Grid container justifyContent="flex-end">
                  <Grid item flex={1} sm={9} md={7} lg={6}>
                    <Grid
                      container
                      spacing={{ xs: 1 }}
                      alignItems="center"
                      justifyContent={isLessSm ? 'flex-end' : 'space-between'}
                    >
                      {isBiggerSm && <PhoneNumber />}

                      <Cart />

                      <DrawerMenu />

                      {isBiggerMd && <LanguageSelector />}
                    </Grid>
                  </Grid>
                </Grid>

                <Navigation />
              </Grid>
            </Grid>
          </Box>
        </BaseContainer>
      </Box>
    </>
  );
};

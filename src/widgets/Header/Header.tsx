'use client';

import { Box, Grid } from '@mui/material';

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
  const [handleRedirect] = useClickRedirect();

  const {
    isLessMd,
    isLessLg,
    isLessSm,
    isBiggerMd,
    isBiggerSm,
  } = useMediaSizes();

  return (
    <Box
      width="100%"
      padding={isLessMd ? '15px 0' : '30px 0'}
      bgcolor="baseWhite.main"
      borderBottom="1px solid"
      borderColor="border.main"
      component="header"
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
                src={isLessLg ? '/images/logo-short.png' : '/images/logo.svg'}
                alt="Weestep Kids"
                width={isLessLg ? 150 : 425}
                height={40}
                onClick={handleRedirect(Links.CATALOGUE)}
                objectFit="contain"
              />

              {isBiggerMd && (
                <IntlTypography
                  fontSize="17px"
                  intl={{ label: 'headerUnderLogo' }}
                />
              )}
            </Grid>

            <Grid item flex={1}>
              <Grid container justifyContent="flex-end">
                <Grid item flex={1} sm={9} md={7} lg={6}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent={isLessSm ? 'flex-end' : 'space-between'}
                    spacing={{ xs: 1 }}
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
  );
};

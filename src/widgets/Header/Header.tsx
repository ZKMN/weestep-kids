'use client';

import {
  AppBar,
  Box,
  Grid,
} from '@mui/material';

import { breakpoints } from '@/shared/assets';
import { BaseContainer, BaseImage, IntlTypography } from '@/shared/components';
import { useClickRedirect } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

import {
  Cart,
  DrawerMenu,
  LanguageSelector,
  Navigation,
  PhoneNumber,
} from './components';

import styles from './Header.module.scss';

export const Header = () => {
  const [handleRedirect] = useClickRedirect();

  return (
    <>
      <Box className={styles.headerStub} />

      <AppBar
        color="inherit"
        position="fixed"
        component="header"
        elevation={1}
        className={styles.header}
      >
        <BaseContainer>
          <Grid
            container
            height="100%"
            component="section"
            flexDirection="column"
          >
            <Grid
              container
              flex={1}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item position="relative">
                <BaseImage
                  pointer
                  src="/images/logo-short.svg"
                  alt="Weestep Kids"
                  onClick={handleRedirect(Links.CATALOGUE)}
                  className={styles.logo}
                />

                <IntlTypography
                  intl={{ label: 'texts.headerUnderLogo' }}
                  fontSize="1rem"
                  sx={{
                    position: 'absolute',
                    left: 10,
                    bottom: -10,
                    [breakpoints.down('md')]: {
                      display: 'none',
                    },
                  }}
                />
              </Grid>

              <Grid
                item
                flex={1}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Grid
                  container
                  spacing={{ xs: 1, lg: 3 }}
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Grid
                    item
                    sx={{
                      [breakpoints.down('sm')]: {
                        display: 'none',
                      },
                    }}
                  >
                    <PhoneNumber />
                  </Grid>

                  <Cart />

                  <DrawerMenu />

                  <Grid
                    item
                    sx={{
                      [breakpoints.down('md')]: {
                        display: 'none',
                      },
                    }}
                  >
                    <LanguageSelector />
                  </Grid>
                </Grid>

              </Grid>
            </Grid>

            <Grid
              container
              mt={1}
              justifyContent="center"
              sx={{
                pb: '15px',
                [breakpoints.down('md')]: {
                  display: 'none',
                },
              }}
            >
              <Navigation />
            </Grid>
          </Grid>
        </BaseContainer>
      </AppBar>
    </>
  );
};

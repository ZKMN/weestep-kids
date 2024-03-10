'use client';

import {
  AppBar,
  Box,
  Grid,
  Theme,
  useMediaQuery,
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

  const isLessLg = useMediaQuery<Theme>((theme) => theme.breakpoints.down('lg'), { defaultMatches: true });

  return (
    <>
      <Box className={styles.headerStub} />

      <AppBar
        color="default"
        position="fixed"
        component="header"
        elevation={1}
        className={styles.header}
      >
        <BaseContainer>
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            component="section"
          >
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

                <IntlTypography
                  intl={{ label: 'texts.headerUnderLogo' }}
                  fontSize="1rem"
                  sx={{
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

                <Navigation />
              </Grid>
            </Grid>
          </Box>
        </BaseContainer>
      </AppBar>
    </>
  );
};

'use client';

import {
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

      <Box
        component="header"
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

                <Box
                  sx={{
                    [breakpoints.down('md')]: {
                      display: 'none',
                    },
                  }}
                >
                  <IntlTypography
                    intl={{ label: 'texts.headerUnderLogo' }}
                    fontSize="17px"
                  />
                </Box>
              </Grid>

              <Grid
                item
                flex={1}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Grid container justifyContent="flex-end">
                  <Grid item flex={1} sm={10} md={7} lg={6}>
                    <Grid
                      container
                      spacing={{ xs: 1 }}
                      alignItems="center"
                      sx={{
                        justifyContent: 'space-between',
                        [breakpoints.down('sm')]: {
                          justifyContent: 'flex-end',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          [breakpoints.down('sm')]: {
                            display: 'none',
                          },
                        }}
                      >
                        <PhoneNumber />
                      </Box>

                      <Cart />

                      <DrawerMenu />

                      <Box
                        sx={{
                          [breakpoints.down('md')]: {
                            display: 'none',
                          },
                        }}
                      >
                        <LanguageSelector />
                      </Box>
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

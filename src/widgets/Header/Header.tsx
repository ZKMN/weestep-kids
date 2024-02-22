'use client';

import { Phone } from '@mui/icons-material';
import { Box, Grid, Link } from '@mui/material';

import { BaseContainer, BaseImage, IntlTypography } from '@/shared/components';
import { useClickRedirect } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

import { Cart, LanguageSelector, Menu } from './components';

export const Header = () => {
  const [handleRedirect] = useClickRedirect();

  return (
    <Box
      id="header"
      width="100%"
      padding="30px 0"
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
                src="/images/logo.svg"
                alt="Weestep"
                width={425}
                height={40}
                onClick={handleRedirect(Links.CATALOGUE)}
                objectFit="contain"
              />

              <IntlTypography
                fontSize="17px"
                intl={{ label: 'headerUnderLogo' }}
              />
            </Grid>

            <Grid item flex={1}>
              <Grid container justifyContent="flex-end">
                <Grid item lg={6}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <Grid container alignItems="center">
                        <Phone fontSize="small" color="primary" />

                        <Link href="tel:34611822584">
                          +34 611-82-25-84
                        </Link>
                      </Grid>
                    </Grid>

                    <Cart />

                    <LanguageSelector />
                  </Grid>
                </Grid>
              </Grid>

              <Grid container justifyContent="flex-end">
                <Menu />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </BaseContainer>
    </Box>
  );
};

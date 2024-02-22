'use client';

import { Box, Grid } from '@mui/material';

import { BaseContainer, BaseImage } from '@/shared/components';
import { useClickRedirect, useMediaSizes } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

import { Menu } from './components';

export const Header = () => {
  const [handleRedirect] = useClickRedirect();

  const { isLessMd } = useMediaSizes();

  return (
    <Box
      id="header"
      width="100%"
      padding="15px 0"
      bgcolor="baseWhite.main"
      borderBottom="1px solid"
      borderColor="border.main"
      component="header"
    >
      <BaseContainer disableGutters={isLessMd}>
        <Box component="section">
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <Grid container alignItems="center">
                <BaseImage
                  pointer
                  priority
                  src="/images/logo.svg"
                  alt="Weestep"
                  width={425}
                  height={40}
                  onClick={handleRedirect(Links.HOME)}
                  objectFit="contain"
                />

                <Menu />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </BaseContainer>
    </Box>
  );
};

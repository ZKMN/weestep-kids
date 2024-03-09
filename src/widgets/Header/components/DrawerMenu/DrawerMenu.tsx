import React from 'react';
import { Menu } from '@mui/icons-material';
import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  MenuList,
  Typography,
} from '@mui/material';
import { useBoolean } from 'ahooks';

import { breakpoints } from '@/shared/assets';
import { BaseDrawer, BaseImage } from '@/shared/components';
import {
  useClientTranslation,
  useLngRouter,
  usePathnameWithoutLng,
} from '@/shared/lib/hooks';

import { getMenuItems } from '../../lib/helpers';
import { LanguageSelector, PhoneNumber } from '..';

export const DrawerMenu = () => {
  const [handlePush] = useLngRouter();
  const pathname = usePathnameWithoutLng();
  const [translate] = useClientTranslation('common', { keyPrefix: 'menu' });

  const [isOpen, { setTrue, setFalse }] = useBoolean();

  return (
    <Grid
      item
      sx={{
        [breakpoints.up('md')]: {
          display: 'none',
        },
      }}
    >
      <IconButton onClick={setTrue}>
        <Menu />
      </IconButton>

      <BaseDrawer
        open={isOpen}
        onClose={setFalse}
        titleExtraNode={(
          <BaseImage
            priority
            src="/images/logo-short.svg"
            alt="Weestep Kids"
            width={150}
            height={40}
            objectFit="contain"
          />
        )}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <PhoneNumber />

          <LanguageSelector />
        </Grid>

        <MenuList>
          {getMenuItems.map(({ label, link }, index) => (
            <MenuItem
              divider
              key={label}
              onClick={() => {
                setFalse();
                handlePush(link);
              }}
            >
              <Typography fontSize="1rem">
                {translate(label)}
              </Typography>

              {(pathname.includes(link) || (!pathname && index === 0)) && (
                <Box
                  ml={3}
                  width={7}
                  height={7}
                  bgcolor="background.primary"
                  component="span"
                  borderRadius={100}
                />
              )}
            </MenuItem>
          ))}

        </MenuList>
      </BaseDrawer>
    </Grid>
  );
};

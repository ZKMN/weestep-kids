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

import { BaseDrawer } from '@/shared/components';
import {
  useClientTranslation,
  useLngRouter,
  useMediaSizes,
  usePathnameWithoutLng,
} from '@/shared/lib/hooks';

import { getMenuItems } from '../../lib/helpers';
import { LanguageSelector, PhoneNumber } from '..';

export const DrawerMenu = () => {
  const [handlePush] = useLngRouter();
  const { isBiggerMd } = useMediaSizes();
  const pathname = usePathnameWithoutLng();

  const [isOpen, { setTrue, setFalse }] = useBoolean();

  const { translate } = useClientTranslation('common');

  if (isBiggerMd) {
    return null;
  }

  return (
    <Grid item>
      <IconButton onClick={setTrue}>
        <Menu />
      </IconButton>

      <BaseDrawer
        open={isOpen}
        title="Weestep"
        onClose={setFalse}
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
          {getMenuItems.map(({ label, link, color }, index) => (
            <MenuItem
              divider
              key={label}
              onClick={() => {
                setFalse();
                handlePush(link);
              }}
            >
              <Typography fontWeight={700}>
                {translate(label)}
              </Typography>

              {(pathname === link || (!pathname && index === 0)) && (
                <Box
                  ml={3}
                  width={7}
                  height={7}
                  bgcolor={color}
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
import React from 'react';
import { Close } from '@mui/icons-material';
import {
  Drawer,
  DrawerProps,
  Grid,
  IconButton,
} from '@mui/material';

import { useMediaSizes } from '@/shared/lib/hooks';

import { IntlTypography } from '../..';

interface BaseDrawerProps {
   onClose: () => void;
   titleIntl?: string;
   titleExtraNode?: React.ReactNode;
  }

export const BaseDrawer = ({
  open,
  titleIntl,
  anchor,
  titleExtraNode,
  children,
  onClose,
}: React.PropsWithChildren<Omit<DrawerProps, 'onClose'>> & BaseDrawerProps) => {
  const { isLessSm, isLessMd, isBiggerXl } = useMediaSizes();

  const smWidth = isLessSm && '90%';
  const mdWidth = isLessMd && '50%';
  const xxlWidth = isBiggerXl && '25%';

  return (
    <Drawer
      open={open}
      anchor={anchor || 'right'}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: smWidth || mdWidth || xxlWidth || '30%',
          padding: 2,
        },
      }}
    >
      <Grid
        container
        mb={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <Grid container alignItems="center">

            <IconButton onClick={onClose}>
              <Close />
            </IconButton>

            {titleIntl && (
              <IntlTypography
                ml={2}
                variant="h6"
                fontWeight={700}
                fontSize={isLessSm ? 20 : 28}
                intl={{ label: titleIntl }}
              />
            )}
          </Grid>
        </Grid>

        {titleExtraNode && (
          <Grid item>
            {titleExtraNode}
          </Grid>
        )}
      </Grid>

      {children}
    </Drawer>
  );
};

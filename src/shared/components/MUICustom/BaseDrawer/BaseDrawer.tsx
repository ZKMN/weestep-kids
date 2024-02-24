import React from 'react';
import { Close } from '@mui/icons-material';
import {
  Drawer,
  DrawerProps,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';

import { useMediaSizes } from '@/shared/lib/hooks';

export const BaseDrawer = ({
  open,
  title,
  children,
  onClose,
}: React.PropsWithChildren<Omit<DrawerProps, 'onClose'>> & { onClose: () => void; }) => {
  const { isLessSm, isLessMd, isBiggerXl } = useMediaSizes();

  const smWidth = isLessSm && '90%';
  const mdWidth = isLessMd && '50%';
  const xxlWidth = isBiggerXl && '25%';

  return (
    <Drawer
      open={open}
      anchor="right"
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
      >
        <Grid item>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Grid>

        {title && (
          <Typography
            ml={2}
            variant="h6"
            fontWeight={700}
            fontSize={isLessSm ? 20 : 28}
          >
            {title}
          </Typography>
        )}
      </Grid>

      {children}
    </Drawer>
  );
};

import React from 'react';
import { Close } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

import { useMediaSizes } from '@/shared/lib/hooks';
import { IBaseDialogProps } from '@/shared/types';

import { IntlButton, IntlTypography, LoadingIntlButton } from '../..';

const Transition = React.forwardRef((
  props: TransitionProps & { children: React.ReactElement; },
  ref: React.Ref<unknown>,
// eslint-disable-next-line react/jsx-props-no-spreading
) => <Slide direction="up" ref={ref} {...props} />);

export const BaseDialog = ({
  isOpen,
  footer,
  loading,
  children,
  closable,
  maxWidth,
  titleIntl,
  titleExtraNode,
  onClose,
  onSubmit,
}: React.PropsWithChildren<IBaseDialogProps>) => {
  const { isLessSm } = useMediaSizes();

  const footerNode = footer || (
    <Grid
      container
      mt={2}
      spacing={2}
      justifyContent="flex-end"
    >
      <Grid item xs={12} md={6}>
        <IntlButton
          intl={{ label: 'cancel' }}
          variant="outlined"
          onClick={onClose}
        />
      </Grid>

      {onSubmit && (
        <Grid item xs={12} md={6}>
          <LoadingIntlButton
            intl={{ label: 'submit' }}
            variant="contained"
            loading={loading}
            onClick={onSubmit}
          />
        </Grid>
      )}
    </Grid>
  );

  return (
    <Dialog
      fullWidth
      open={isOpen}
      onClose={onClose}
      maxWidth={maxWidth}
      fullScreen={isLessSm}
      TransitionComponent={Transition}
    >
      <AppBar color="secondary" position="sticky">
        <DialogTitle>
          <Grid container>
            <Grid item flex={1}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <IntlTypography
                  intl={titleIntl}
                  variant="h5"
                  fontWeight={700}
                  color="text.white"
                />

                {titleExtraNode}
              </Grid>
            </Grid>

            {closable && (
              <Grid item>
                <IconButton
                  color="baseBlack"
                  onClick={onClose}
                >
                  <Close />
                </IconButton>
              </Grid>
            )}
          </Grid>
        </DialogTitle>
      </AppBar>

      <DialogContent>
        {children}
      </DialogContent>

      <Box
        p={2}
        position="sticky"
        bottom={0}
        bgcolor="baseWhite.main"
        borderTop="1px solid"
        borderColor="border.main"
      >
        {footerNode}
      </Box>
    </Dialog>
  );
};

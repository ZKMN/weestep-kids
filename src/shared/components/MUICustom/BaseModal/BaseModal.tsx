'use client';

import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Grid,
  IconButton,
  Modal,
  ModalProps,
  Typography,
} from '@mui/material';

import { useMediaSizes } from '@/shared/lib/hooks';

import { IntlButton, LoadingButton } from '../..';

export interface IBaseModalProps extends Omit<ModalProps, 'open' | 'children' | 'onClose'> {
  isOpen: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClose: () => void;
  onSubmit?: () => void;
}

export const BaseModal = ({
  title,
  isOpen,
  children,
  loading,
  onClose,
  onSubmit,
}: React.PropsWithChildren<IBaseModalProps>) => {
  const { isLessSm } = useMediaSizes();

  return (
    <Modal
      disableAutoFocus
      open={isOpen}
      onClose={onClose}
    >
      <Box
        sx={{
          width: isLessSm ? '90%' : '30%',
          height: 'auto',
          padding: isLessSm ? '20px' : '15px',
          margin: isLessSm ? '10px' : '15px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'absolute',
          top: '5%',
          left: '50%',
          boxShadow: 24,
          transform: 'translate(-50%, 0)',
          borderRadius: '10px',
          bgcolor: 'baseWhite.main',
        }}
      >
        <Grid
          container
          justifyContent="space-between"
        >
          <Grid item>
            <Typography variant="h5" fontWeight={700}>
              {title}
            </Typography>
          </Grid>

          <Grid item>
            <IconButton
              color="baseBlack"
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>

        <Grid
          container
          mt={2}
          spacing={2}
          justifyContent="flex-end"
        >
          <Grid item>
            <IntlButton
              intl={{ label: 'cancel' }}
              variant="outlined"
              onClick={onClose}
            />
          </Grid>

          {onSubmit && (
            <Grid item>
              <LoadingButton
                intl={{ label: 'submit' }}
                variant="contained"
                loading={loading}
                onClick={onSubmit}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Modal>
  );
};

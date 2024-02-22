'use client';

import { createTheme, Palette } from '@mui/material';

import { COLORS } from '@/shared/consts';

import { hendrixFont } from './font';

export const { palette, breakpoints } = createTheme({ palette: COLORS as unknown as Palette });

const options = {
  palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '100%',
          fontSize: 16,
          fontWeight: 500,
          boxShadow: 'none',
          borderRadius: '10px',
          textTransform: 'none' as const,
          ':disabled': {
            opacity: 0.6,
          },
          '&.Mui-disabled.MuiButton-containedPrimary': {
            background: palette.primary.main,
          },
          '&.Mui-disabled.MuiButton-containedSecondary': {
            background: palette.secondary.main,
          },
          '&.MuiButton-containedPrimary': {
            color: palette.baseWhite.main,
          },
          '&.MuiButton-containedSecondary': {
            color: palette.baseBlack.main,
          },
        },
        sizeLarge: {
          fontSize: 18,
        },
        sizeXLarge: {
          fontSize: 20,
          [breakpoints.down('sm')]: {
            fontSize: 18,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          '&.Mui-error': {
            background: palette.background.error,
          },
        },
      },
    },
  },
  typography: {
    fontFamily: hendrixFont.style.fontFamily,
    body1: {
      color: '#272424',
      fontSize: 16,
      fontWeight: 400,
    },
  },
};

export const theme = createTheme(options);

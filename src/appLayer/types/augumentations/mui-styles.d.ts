import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    baseGrey: Palette['primary'];
    baseWhite: Palette['primary'];
    baseBlack: Palette['primary'];
  }

  interface PaletteOptions {
    baseGrey: Palette['primary'];
    baseWhite: Palette['primary'];
    baseBlack: Palette['primary'];
  }

  interface TypeBackground {
    error: TypeBackground['default'];
  }
}

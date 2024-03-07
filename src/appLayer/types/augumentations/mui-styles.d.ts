import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    baseGrey: Palette['primary'];
    baseBlack: Palette['primary'];
  }

  interface PaletteOptions {
    baseGrey: Palette['primary'];
    baseBlack: Palette['primary'];
  }

  interface TypeBackground {
    error: TypeBackground['default'];
    primary: TypeBackground['default'];
    secondary: TypeBackground['default'];
  }

  interface TypeText {
    grey: TypeText['primary'];
    white: TypeText['primary'];
    green: TypeText['primary'];
    black: TypeText['primary'];
  }
}

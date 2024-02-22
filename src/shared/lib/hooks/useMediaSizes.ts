import { Theme, useMediaQuery } from '@mui/material';

export const useMediaSizes = () => {
  const isLessSm = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'), { defaultMatches: true });
  const isLessMd = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'), { defaultMatches: true });
  const isLessLg = useMediaQuery<Theme>((theme) => theme.breakpoints.down('lg'), { defaultMatches: true });
  const isBiggerSm = useMediaQuery<Theme>((theme) => theme.breakpoints.up('sm'), { defaultMatches: true });
  const isBiggerMd = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'), { defaultMatches: true });
  const isBiggerLg = useMediaQuery<Theme>((theme) => theme.breakpoints.up('lg'), { defaultMatches: true });
  const isBiggerXl = useMediaQuery<Theme>((theme) => theme.breakpoints.up('xl'), { defaultMatches: true });

  return {
    isLessSm,
    isLessMd,
    isLessLg,
    isBiggerSm,
    isBiggerMd,
    isBiggerLg,
    isBiggerXl,
  };
};

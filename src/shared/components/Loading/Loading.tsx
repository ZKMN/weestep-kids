import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export const Loading = ({ children, loading }: React.PropsWithChildren<{ loading: boolean; }>) => {
  if (loading) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)',
            zIndex: 2,
          }}
        >
          <CircularProgress />
        </Box>

        {children}
      </Box>
    );
  }

  return children;
};

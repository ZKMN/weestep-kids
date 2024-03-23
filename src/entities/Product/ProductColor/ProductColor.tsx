import React from 'react';
import { Box } from '@mui/material';

export const ProductColor = ({
  small,
  color,
  active,
  noBorders,
  onClick,
}: {
  color: string;
  small?: boolean;
  active?: boolean;
  noBorders?: boolean;
  onClick?: () => void;
}) => (
  <Box
    sx={{ cursor: onClick ? 'pointer' : 'default' }}
    border={noBorders ? 'none' : `${active ? 2 : 1}px solid`}
    padding={(noBorders || small) ? 0 : 0.5}
    bgcolor="transparent"
    onClick={onClick}
    component={onClick ? 'button' : undefined}
    borderColor={`border.${active ? 'black' : 'main'}`}
    borderRadius={1}
    aria-label="Elija color"
  >
    <Box
      key={color}
      width={small ? 15 : 20}
      height={small ? 15 : 20}
      bgcolor={color}
      borderRadius={1}
      border="1px solid"
      borderColor="border.main"
    />
  </Box>
);

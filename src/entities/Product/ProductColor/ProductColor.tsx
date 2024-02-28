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
    padding={small ? 0 : 0.5}
    component={onClick ? 'button' : undefined}
    border={noBorders ? 'none' : `${active ? 2 : 1}px solid`}
    bgcolor="transparent"
    borderColor={`border.${active ? 'black' : 'main'}`}
    onClick={onClick}
    borderRadius={1}
    sx={{ cursor: onClick ? 'pointer' : 'default' }}
  >
    <Box
      key={color}
      bgcolor={color}
      width={small ? 15 : 20}
      height={small ? 15 : 20}
      borderRadius={1}
      border={noBorders ? 'none' : '2px solid'}
      borderColor="border.black"
    />
  </Box>
);

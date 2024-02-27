import React from 'react';
import { Box } from '@mui/material';

export const ProductColor = ({
  color,
  active,
  onClick,
}: {
  color: string;
  active?: boolean;
  onClick?: () => void;
}) => (
  <Box
    padding={0.5}
    component="button"
    border={`${active ? 2 : 1}px solid`}
    bgcolor="transparent"
    borderColor={`border.${active ? 'black' : 'main'}`}
    onClick={onClick}
    borderRadius={2}
    sx={{ cursor: 'pointer' }}
  >
    <Box
      key={color}
      bgcolor={color}
      width={20}
      height={20}
      borderRadius={2}
      border="2px solid"
      borderColor="border.black"
    />
  </Box>
);

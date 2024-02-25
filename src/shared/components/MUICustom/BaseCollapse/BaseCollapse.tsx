'use client';

import React from 'react';
import { ArrowForwardIos } from '@mui/icons-material';
import { Box, Collapse, Typography } from '@mui/material';
import { useBoolean } from 'ahooks';

import { useMediaSizes } from '@/shared/lib/hooks';

export const BaseCollapse = ({ title, children }: React.PropsWithChildren<{ title: string; }>) => {
  const [isOpen, { toggle }] = useBoolean();
  const { isLessMd } = useMediaSizes();

  return (
    <>
      <Box
        sx={{ cursor: 'pointer' }}
        onClick={toggle}
        width="100%"
        border="none"
        display="flex"
        component="button"
        alignItems="center"
        justifyContent="space-between"
        bgcolor="baseWhite.main"
        borderBottom="1px solid"
        borderColor="border.main"
        padding={isLessMd ? '5px 0' : '10px 0'}
      >
        <Typography
          color="secondary"
          fontSize={18}
        >
          {title}
        </Typography>

        <ArrowForwardIos
          color="secondary"
          fontSize="small"
          sx={(theme) => ({
            transform: isOpen ? 'rotate(90deg)' : undefined,
            transition: theme.transitions.create(['transform'], {
              duration: theme.transitions.duration.short,
            }),
          })}
        />
      </Box>

      <Collapse in={isOpen}>
        <Box pl={2}>
          {children}
        </Box>
      </Collapse>
    </>
  );
};

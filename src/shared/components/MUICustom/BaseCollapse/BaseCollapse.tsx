'use client';

import React from 'react';
import { ArrowForwardIos } from '@mui/icons-material';
import { Box, Collapse, Typography } from '@mui/material';
import { useBoolean } from 'ahooks';

export const BaseCollapse = ({ title, children }: React.PropsWithChildren<{ title: string; }>) => {
  const [isOpen, { toggle }] = useBoolean();

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
        bgcolor="background.paper"
        borderBottom="1px solid"
        borderColor="border.main"
        padding="10px 0"
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

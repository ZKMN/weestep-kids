import React from 'react';
import { Grid, Link, Stack } from '@mui/material';

import { SOCIALS } from './consts';

export const Socials = () => (
  <Stack spacing={2}>
    {SOCIALS.map(({ href, icon, title }) => (
      <Grid
        container
        key={title}
        justifyItems="center"
      >
        {icon}

        <Link
          ml={1}
          sx={{ textDecoration: 'none' }}
          color="baseBlack.main"
          href={href}
          target="_blank"
          fontSize={20}
          fontWeight={700}
        >
          {title}
        </Link>
      </Grid>
    ))}
  </Stack>
);

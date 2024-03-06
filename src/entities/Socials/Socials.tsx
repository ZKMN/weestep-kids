import React from 'react';
import { Grid, Link, Stack } from '@mui/material';

import { SOCIALS } from './consts';

export const Socials = ({ onlyIcons }: { onlyIcons?: boolean; }) => {
  if (onlyIcons) {
    return (
      <Grid container spacing={1} justifyItems="center">
        {SOCIALS.map(({ href, icon }) => (
          <Grid item key={href}>
            <Link
              href={href}
              target="_blank"
            >
              {icon}
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
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
            color="text.black"
            href={href}
            target="_blank"
            fontSize={20}
            fontWeight={700}
            underline="hover"
          >
            {title}
          </Link>
        </Grid>
      ))}
    </Stack>
  );
};

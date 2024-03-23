import React from 'react';
import { Box, Link, Stack } from '@mui/material';

import { SOCIALS } from './consts';

export const Socials = ({ onlyIcons }: { onlyIcons?: boolean; }) => {
  if (onlyIcons) {
    return (
      <Stack spacing={1} direction="row">
        {SOCIALS.map(({ href, icon, title }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            aria-label={`Síguenos en ${title}`}
          >
            {icon}
          </Link>
        ))}
      </Stack>
    );
  }

  return (
    <Stack spacing={2}>
      {SOCIALS.map(({ href, icon, title }) => (
        <Link
          key={title}
          display="flex"
          alignItems="center"
          color="text.black"
          href={href}
          target="_blank"
          fontSize={20}
          fontWeight={700}
          underline="hover"
          aria-label={`Síguenos en ${title}`}
        >
          {icon}
          <Box mr={1} />
          {title}
        </Link>
      ))}
    </Stack>
  );
};

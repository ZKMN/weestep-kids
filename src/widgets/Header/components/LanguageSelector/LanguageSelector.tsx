import React, { useState } from 'react';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useRouter } from 'next/navigation';

import { LANGUAGES } from '@/shared/consts';
import { useTypedParams } from '@/shared/lib/hooks';
import { TLanguages } from '@/shared/types';

export const LanguageSelector = () => {
  const { lng } = useTypedParams();
  const { push } = useRouter();

  const [language, setLanguage] = useState<TLanguages>(lng);

  const handleChange = (event: SelectChangeEvent) => {
    push(`/${event.target.value}/${window.location.pathname.replace(`/${lng}`, '')}${window.location.search}`);

    setLanguage(event.target.value as TLanguages);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <Select
          size="small"
          value={language}
          color="secondary"
          onChange={handleChange}
          sx={{
            '.MuiSelect-select': {
              padding: '5px',
            },
          }}
        >
          {LANGUAGES.map((lang) => (
            <MenuItem
              key={lang}
              value={lang}
              sx={{
                padding: '5px',
                fontSize: '14px',
              }}
            >
              {lang.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

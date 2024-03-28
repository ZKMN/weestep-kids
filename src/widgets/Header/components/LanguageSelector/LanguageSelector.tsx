import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useRouter } from 'next/navigation';

import { I18N_COOKIE_NAME, LANGUAGES } from '@/shared/consts';
import { useTypedParams } from '@/shared/lib/hooks';

export const LanguageSelector = () => {
  const { lng } = useTypedParams();
  const { push } = useRouter();
  const [cookies, setCookie] = useCookies([I18N_COOKIE_NAME]);

  useEffect(() => {
    if (cookies.i18next === lng) return;

    setCookie(I18N_COOKIE_NAME, lng, { path: '/' });
  }, [lng, cookies.i18next]);

  const handleChange = (event: SelectChangeEvent) => {
    push(`/${event.target.value}/${window.location.pathname.replace(`/${lng}`, '')}${window.location.search}`);
  };

  return (
    <Grid item>
      <FormControl id="select-language" fullWidth>
        <Select
          name="language"
          size="small"
          value={lng}
          onChange={handleChange}
          aria-label="Seleccionar idioma"
          labelId="select-language"
          aria-labelledby="select-language"
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
              aria-label={`${lang} idioma`}
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
    </Grid>
  );
};

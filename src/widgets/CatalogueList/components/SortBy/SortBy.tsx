import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

import { useClientTranslation } from '@/shared/lib/hooks';

export const SortBy = () => {
  const sorters = [{
    name: 'relevance',
    value: 'relevance',
  }, {
    name: 'newest',
    value: 'newest',
  }];

  const [translate] = useClientTranslation('forms');

  return (
    <FormControl fullWidth>
      <InputLabel size="small">
        {translate('labels.sortBy')}
      </InputLabel>

      <Select
        size="small"
        // value=""
        // onChange={handleChange}
        label={translate('labels.sortBy')}
      >
        {sorters.map(({ name, value }) => (
          <MenuItem
            key={name}
            value={value}
            sx={{
              padding: '5px',
              fontSize: '14px',
            }}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

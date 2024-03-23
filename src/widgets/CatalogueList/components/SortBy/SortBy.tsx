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
    name: 'Relevance',
    value: 'relevance',
  }, {
    name: 'Newest',
    value: 'newest',
  }];

  const [translate] = useClientTranslation('form');

  return (
    <FormControl fullWidth>
      <InputLabel size="small">
        {translate('labels.sortBy')}
      </InputLabel>

      <Select
        id="sort-by"
        size="small"
        value="newest"
        // onChange={handleChange}
        label={translate('labels.sortBy')}
      >
        {sorters.map(({ name, value }) => (
          <MenuItem
            key={name}
            value={value}
            aria-labelledby="sort-by"
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

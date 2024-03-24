import React from 'react';
import { Box } from '@mui/material';

import { theme } from '@/shared/assets';
import {
  useClickRedirect,
  useClientTranslation,
  usePathnameWithoutLng,
} from '@/shared/lib/hooks';

import { getMenuItems } from '../../lib/helpers';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  const [handleRedirect] = useClickRedirect();
  const pathname = usePathnameWithoutLng();

  const [translate] = useClientTranslation('common', { keyPrefix: 'menu' });

  return (
    <Box component="menu">
      <Box component="ul" className={styles.menuUl}>
        {getMenuItems.map(({ label, link }, index) => (
          <Box
            key={label}
            component="li"
            className={styles.menuItem}
          >
            <Box
              onClick={handleRedirect(link)}
              component="button"
              className={styles.menuItemButton}
              fontFamily={theme.typography.fontFamily}
            >
              {translate(label)}

              {(pathname.includes(link) || (!pathname && index === 0)) && (
                <Box
                  bgcolor="background.primary"
                  className={styles.activeMenuItem}
                />
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

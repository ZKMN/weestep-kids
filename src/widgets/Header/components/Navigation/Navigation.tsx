import React from 'react';
import { Box } from '@mui/material';

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
    <Box component="menu" className={styles.menu}>
      <Box component="ul" className={styles.menuUl}>
        {getMenuItems.map(({ label, link, color }, index) => (
          <Box
            key={label}
            component="li"
            className={styles.menuItem}
          >
            <Box
              style={{ color }}
              onClick={handleRedirect(link)}
              component="button"
              className={styles.menuItemButton}
            >
              {translate(label)}

              {(pathname.includes(link) || (!pathname && index === 0)) && (
                <Box
                  style={{ background: color }}
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

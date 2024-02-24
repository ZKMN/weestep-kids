import React from 'react';
import { Box, Grid } from '@mui/material';

import {
  useClickRedirect,
  useClientTranslation,
  useMediaSizes,
  usePathnameWithoutLng,
} from '@/shared/lib/hooks';

import { getMenuItems } from '../../lib/helpers';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  const [handleRedirect] = useClickRedirect();
  const pathname = usePathnameWithoutLng();

  const { isLessMd } = useMediaSizes();

  const { translate } = useClientTranslation('common');

  if (isLessMd) {
    return null;
  }

  return (
    <Grid container justifyContent="flex-end">
      <Box component="menu" className={styles.menu}>
        <ul className={styles.menuUl}>
          {getMenuItems.map(({ label, link, color }, index) => (
            <li
              key={label}
              className={styles.menuItem}
            >
              <button
                type="button"
                style={{ color }}
                onClick={handleRedirect(link)}
                className={styles.menuItemButton}
              >
                {translate(label)}

                {(pathname === link || (!pathname && index === 0)) && (
                  <span
                    className={styles.activeMenuItem}
                    style={{ background: color }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </Box>
    </Grid>
  );
};

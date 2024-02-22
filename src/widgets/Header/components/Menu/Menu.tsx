import React from 'react';

import {
  useClickRedirect,
  useClientTranslation,
  useMediaSizes,
  usePathnameWithoutLng,
} from '@/shared/lib/hooks';

import { getMenuItems } from '../../lib/helpers';

import styles from './Menu.module.scss';

export const Menu = () => {
  const [handleRedirect] = useClickRedirect();
  const pathname = usePathnameWithoutLng();

  const { isLessLg } = useMediaSizes();

  const { translate } = useClientTranslation('common');

  if (isLessLg) {
    return null;
  }

  return (
    <ul className={styles.menu}>
      {getMenuItems.map(({ label, link, color }, index) => (
        <li
          key={label}
          className={styles.menuItem}
        >
          <button
            type="button"
            onClick={handleRedirect(link)}
            className={styles.menuItemButton}
            style={{ color }}
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
  );
};

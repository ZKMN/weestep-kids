import React from 'react';
import clsx from 'clsx';

import { useClickRedirect, useMediaSizes, usePathnameWithoutLng } from '@/shared/lib/hooks';

import { getMenuItems } from '../../lib/helpers';

import styles from './Menu.module.scss';

export const Menu = () => {
  const [handleRedirect] = useClickRedirect();
  const pathname = usePathnameWithoutLng();

  const { isLessLg } = useMediaSizes();

  if (isLessLg) {
    return null;
  }

  return (
    <ul className={styles.menu}>
      {getMenuItems.map(({ title, link }, index) => (
        <li
          key={title}
          className={styles.menuItem}
        >
          <button
            type="button"
            onClick={handleRedirect(link)}
            className={clsx(
              styles.menuItemButton,
              pathname === link && styles.activeMenuItemButton,
              !pathname && index === 0 && styles.activeMenuItemButton,
            )}
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  );
};

import React from 'react';
import clsx from 'clsx';

import styles from './SelectButton.module.scss';

export const SelectButton = ({
  children,
  isSelected,
  onClick,
}: React.PropsWithChildren<{ onClick: () => void; isSelected: boolean; }>) => (
  <button
    type="button"
    onClick={onClick}
    className={clsx(styles.productButton, isSelected && styles.selected)}
  >
    {children}
  </button>
);

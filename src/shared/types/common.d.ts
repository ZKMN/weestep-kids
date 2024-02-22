import { Dispatch } from 'react';

export interface IIntlProps {
  intl: {
    label: string;
    values?: Record<string, unknown>;
  };
}

export interface IValueChange {
  value: string;
  onChange: Dispatch<string>;
}

export type TLanguages = 'es' | 'en';

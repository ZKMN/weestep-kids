import { DialogProps, DrawerProps } from '@mui/material';

export interface IBaseDialogProps extends Omit<DialogProps, 'open' | 'children' | 'onClose' | 'title'> {
  isOpen: boolean;
  footer?: React.ReactNode;
  loading?: boolean;
  closable?: boolean;
  titleIntl: IIntlProps['intl'];
  titleExtraNode?: React.ReactNode;
  onClose?: () => void;
  onSubmit?: () => void;
}

export interface BaseDrawerProps extends Omit<DrawerProps, 'onClose'> {
  onClose: () => void;
  titleIntl: IIntlProps['intl'];
  titleExtraNode?: React.ReactNode;
}

export interface IIntlProps {
  intl: {
    label: string;
    values?: Record<string, unknown>;
  };
}

import { config } from '@/shared/lib/config';

export const handleLogout = () => {
  localStorage.removeItem(String(config?.storageKeyName));
  window.location.reload();
};

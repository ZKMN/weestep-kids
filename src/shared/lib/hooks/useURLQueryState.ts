import { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useURLQueryState = (): [(path?: string) => void, URLSearchParams] => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryParams = new URLSearchParams(searchParams.toString());

  const handlePushQuery = useCallback((path?: string) => {
    const search = queryParams.toString();
    const query = search ? `?${search}` : '';

    router.replace(`${path || pathname}${query}`, { scroll: false });
  }, [router, pathname, queryParams]);

  return [handlePushQuery, queryParams];
};

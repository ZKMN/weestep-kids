import { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useChangeFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChangeFilter = useCallback((category: string, value: string) => () => {
    const queryParams = new URLSearchParams(searchParams.toString());

    const searchCategory = searchParams.get(category);
    const categoryValues = searchCategory?.split(',').filter(Boolean) || [];

    let updatedCategoryValues;

    if (categoryValues.includes(value)) {
      updatedCategoryValues = categoryValues.filter((v) => v !== value);
    } else {
      updatedCategoryValues = [...categoryValues, value];
    }

    if (updatedCategoryValues.length > 0) {
      queryParams.set(category, updatedCategoryValues.join(','));
    } else {
      queryParams.delete(category);
    }

    const search = queryParams.toString();
    const query = search ? `?${search}` : '';

    router.push(`${pathname}${query}`, { scroll: false });
  }, [searchParams]);

  return handleChangeFilter;
};

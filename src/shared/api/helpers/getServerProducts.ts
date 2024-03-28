import { PRODUCTS_COUNT } from '@/shared/consts';
import { TLanguages } from '@/shared/types';
import { IProductShort } from '@/shared/types/product';

import { apiGet } from '../instance';

export const getServerProducts = async (lng: TLanguages, page: string) => {
  try {
    const { data } = await apiGet<{ items: IProductShort[]; total: number; }>({
      url: `/${lng}/v1/products/list?page=${page || 1}&paginate_by=${PRODUCTS_COUNT || 16}`,
    });

    return { products: data.items, total: data.total };
  } catch (error) {
    console.warn(error);

    return { products: [], total: 0 };
  }
};

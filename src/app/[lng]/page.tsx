import { Catalogue } from '@/pagesLayer/Catalogue';

import { getServerProducts } from '@/shared/api/helpers';
import { INextPageParams } from '@/shared/types';

export const dynamic = 'force-static';

const CataloguePage = async ({ params: { lng }, searchParams }: INextPageParams<{ pagina: string; }>) => {
  const page = searchParams?.pagina || '1';

  const { products, total } = await getServerProducts(lng, page);

  return <Catalogue total={total} products={products} />;
};

export default CataloguePage;

import { Metadata } from 'next';

import { Catalogue } from '@/pagesLayer/Catalogue';

import { getServerProducts } from '@/shared/api/helpers';
import { EN_MAIN_METADATA, ES_MAIN_METADATA } from '@/shared/consts';
import { INextPageParams } from '@/shared/types';

export const dynamic = 'force-static';

export async function generateMetadata({ params: { lng } }: INextPageParams<{ pagina: string; }>): Promise<Metadata> {
  if (lng === 'es') {
    return ES_MAIN_METADATA;
  }

  return EN_MAIN_METADATA;
}

const CataloguePage = async ({ params: { lng }, searchParams }: INextPageParams<{ pagina: string; }>) => {
  const page = searchParams?.pagina || '1';

  const { products, total } = await getServerProducts(lng, page);

  return <Catalogue total={total} products={products} />;
};

export default CataloguePage;

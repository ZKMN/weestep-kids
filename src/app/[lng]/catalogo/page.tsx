/* eslint-disable max-len */
import { Metadata } from 'next';

import { Catalogue } from '@/pagesLayer/Catalogue';

import { EN_MAIN_METADATA, ES_MAIN_METADATA } from '@/shared/consts';
import { TLanguages } from '@/shared/types';

export async function generateMetadata({ params: { lng } }: { params: { lng: TLanguages; }; }): Promise<Metadata> {
  if (lng === 'es') {
    return ES_MAIN_METADATA;
  }

  return EN_MAIN_METADATA;
}

const CataloguePage = () => <Catalogue />;

export default CataloguePage;

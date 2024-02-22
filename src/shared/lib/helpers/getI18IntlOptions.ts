import { DEFAULT_FILE_NAME, FALLBACK_LNG, LANGUAGES } from '@/shared/consts';

export function getI18IntlOptions(lng = FALLBACK_LNG, ns = DEFAULT_FILE_NAME) {
  return {
    // debug: true,
    ns,
    lng,
    defaultNS: DEFAULT_FILE_NAME,
    fallbackLng: FALLBACK_LNG,
    fallbackNS: DEFAULT_FILE_NAME,
    supportedLngs: LANGUAGES,
  };
}

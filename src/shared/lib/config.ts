const commonVars = {
  storageKeyName: 'r2-d2-kjkszpj',
  keys: {
    gAPI: process.env.NEXT_PUBLIC_GAPI_KEY,
    stripePublish: process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY,
  },
  urls: {
    API: '', // process.env.APP_ENV,
    site: 'https://weestep-kids.vercel.app',
    imgCDN: '',
  },
};

export const config = {
  test: commonVars,
  production: {
    ...commonVars,
    urls: {
      API: '', // process.env.APP_ENV,
      site: 'https://weestep-kids.es/',
      imgCDN: '',
    },
  },
  development: commonVars,
}[process.env.NEXT_PUBLIC_APP_ENV || 'development'];

console.log(config, process.env.NEXT_PUBLIC_APP_ENV);

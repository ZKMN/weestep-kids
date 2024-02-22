const commonVars = {
  storageKeyName: 'appState',
  icons: [{
    rel: 'icon',
    type: 'image/x-icon',
    sizes: '16x16',
    url: '/images/favicons/favicon.ico',
  }, {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    url: '/images/favicons/favicon-16x16.png',
  }, {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    url: '/images/favicons/favicon-32x32.png',
  }, {
    rel: 'icon',
    type: 'image/png',
    sizes: '194x194',
    url: '/images/favicons/favicon-194x194.png',
  }, {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    url: '/images/favicons/apple-icon.png',
  }, {
    rel: 'mask-icon',
    color: '#ff7c2a',
    url: '/images/favicons/safari-pinned-tab.svg',
  }],
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
}[process.env.APP_ENV || 'development'];

const commonVars = {
  xOrderhouseTenant: 'osmows',
  googleMapLibraries: ['places'],
  storageKeyName: 'appState',
  keys: {
    xAPI: '3sTYCn8Icx31VPbqUERjXUnrTjOSpaJ6beJp2XJ0',
    gAPI: 'AIzaSyAx6q2sYiLJUHt_tTsd7AXuKmJxxX8n38s',
  },
  urls: {
    API: 'https://broccoli.dev.orderhouse.io/api/graphql', // process.env.NEXT_PUBLIC_API_URL,
    site: 'https://osmows.dev.orderhouse.io',
    imgCDN: 'https://oh-dev-cdn.s3.amazonaws.com',
  },
};

export const config = {
  test: commonVars,
  production: commonVars,
  development: commonVars,
}[process.env.NEXT_PUBLIC_APP_ENV || 'development'];

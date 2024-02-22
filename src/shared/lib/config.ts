const commonVars = {
  storageKeyName: 'appState',
  urls: {
    API: 'https://broccoli.dev.orderhouse.io/api/graphql', // process.env.NEXT_PUBLIC_API_URL,
    site: 'https://weestep-kids.vercel.app/en',
    imgCDN: 'https://oh-dev-cdn.s3.amazonaws.com',
  },
};

export const config = {
  test: commonVars,
  production: commonVars,
  development: commonVars,
}[process.env.NEXT_PUBLIC_APP_ENV || 'development'];

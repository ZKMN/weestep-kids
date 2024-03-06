// import { TLanguages } from '@/shared/types';

export const dynamicParams = true;

// export async function generateMetadata({
//   params: { lng, locationId, productId },
// }: {
//   params: { lng: TLanguages; locationId: string; productId: number; };
// }): Promise<Metadata> {
//   const { data } = await getClient().query<IQuery, IQueryGetCategoriesArgs>({
//     fetchPolicy: 'no-cache',
//     query: MenuQuery,
//     variables: {
//       input: {
//         locationId,
//         language: getLanguageEnum(lng),
//         handoffMode: '',
//       },
//     },
//   });

//   const product = data.getCategories?.reduce((acc, item) => {
//     const prod = item.products?.find((product) => Number(product.productId) === Number(productId));

//     if (prod) {
//       return prod;
//     }

//     return acc;
//   }, {}) as IBasketProduct;

//   return {
//     title: `${product.name}, Customize it!`,
//     metadataBase: new URL(String(config?.urls.imgCDN)),
//     description: `Osmows Deep Product Customization, ${product.description}`,
//     openGraph: {
//       url: config?.urls.site,
//       type: 'website',
//       title: `${product.name}, Customize it!`,
//       locale: getLanguageEnum(lng),
//       images: {
//         url: product.image,
//         width: '50px',
//         height: '50px',
//       },
//     },
//     twitter: {
//       site: config?.urls.site,
//       title: `${product.name}, Customize it!`,
//       description: `Osmows Deep Product Customization, ${product.description}`,
//       images: {
//         url: product.image,
//         width: '50px',
//         height: '50px',
//       },
//     },
//   };
// }

// https://github.com/vercel/next.js/issues/53717
// export async function generateStaticParams({
//   params: { lng, locationId },
// }: {
//   params: { lng: TLanguages; locationId: string; };
// }) {
//   return [];
// }

// {/* <meta property="product:retailer_item_id" content="107437" />
// <meta property="product:item_group_id" content="107437" />
// <meta property="product:condition" content="new" />
// <meta property="product:availability" content="in stock" />
// <meta property="brand" content="Batilas" />
// <meta property="product:category" content="0" />
// <meta property="product:sale_price:amount" content="15" />
// <meta property="product:sale_price:currency" content="EUR" /> */}

const Layout = ({ children }: React.PropsWithChildren) => children;

export default Layout;

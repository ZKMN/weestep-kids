export interface IProductShort {
  img: string;
  title: string;
  productId: string;
  'price_initial_1c': number;
  'discount_1c': 0;
  price: number;
  currency: 'EUR';
  shoesType: string;
  colorsAvailable: {
    id: number;
    image: string;
    color: string;
    productId: string;
  }[];
  sizes: {
    id: number;
    value: string;
    santimeters?: number;
  }[];
}
// export interface IProductShort {
//   img: string;
//   name: string;
//   price: number;
//   discount: number; // percent or amount
//   isNew: boolean;
//   isTopSale: boolean;
//   shoesType: 'niños-zapatos' | 'sandalias' | 'etc..'; // static value on spain
//   productId: string;
//   colorsAvailable: {
//     id: string | number;
//     image: string;
//     color: string; // hex like #FFFFFF
//     productId?: string;
//   }[]; // Arrays of colors
//   sizes: {
//     id: string | number;
//     value: number;
//     santimeters?: number;
//   }[]; // Array of sizes
// }

interface IProductShortDetails extends Omit<IProductShort, 'img'> {
  images: string[]; // Array of urls
  gender: 'boy' | 'girl'; // or we can split in in boolean props boys: true; girls: true;
  available: number;
  color: {
    id: string | number;
    image?: string;
    color: string; // hex like #FFFFFF
    productId: string;
  };
  youMayLike: {
    id: string | number;
    image: string;
  }[]; // Array of likes
  details: {
    title: string;
    description: string;
  }[]; // Array of details
}

interface IFilter {
  title: string; // Gender, title depends on language
  category: string; // static value on spain
  values: {
    name: string; // Male, name depends on language
    value: string; // static value on spain
    count: number;
  }[]; // Array of category options
}

interface IProductListItem {
  img: string;
  name: string;
  price: number;
  discount: number; // percent or amount
  isNew: boolean;
  isTopSale: boolean;
  shoesType: 'niños-zapatos' | 'sandalias' | 'etc..'; // static value on spain
  productId: string;
  colorsAvailable: {
    id: string | number;
    image: string;
    color: string; // hex like #FFFFFF
    productId?: string;
  }[]; // Arrays of colors
  sizes: {
    id: string | number;
    value: number;
    santimeters?: number;
  }[]; // Array of sizes
}

interface IProductDetails extends Omit<IProductListItem, 'img'> {
  images: string[]; // Array of urls
  forGender: 'boy' | 'girl'; // or we can split in in boolean props forBoys: true; forGirls: true;
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

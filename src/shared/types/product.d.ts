interface IProductListItem {
  img: string;
  name: string;
  price: number;
  discount: number; // percent or amount
  isNew: boolean;
  topSales: boolean;
  type: 'kids-shoes' | 'sandals' | 'boots' |'etc....'; // language depends on site
  productId: string;
  colorsAvailable: {
    id: string | number;
    value: string; // image of product
    color: string; // hex like #FFFFFF
    productId?: string;
  }[]; // Arrays of colors
  sizes: {
    id: string | number;
    value: number;
    santimeters?: number;
  }[]; // Array of sizes
}

interface ProductDetails extends Omit<IProductListItem, 'img'> {
  images: string[]; // Array of urls
  forGender: 'boy' | 'girl'; // or we can split in in boolean props forBoys: true; forGirls: true;
  available: number;
  color: {
    id: string | number;
    value?: string; // image of product
    color: string; // hex like #FFFFFF
    productId: string;
  };
  youMayLike: {
    id: string | number;
    value: string; // image of product
  }[]; // Array of likes
  details: {
    title: string;
    description: string;
  }[]; // Array of details
}

interface IFilter {
  title: string; // Gender, title depends on language
  category: string; // gender, static value on eng
  values: {
    name: string; // Male, name depends on language
    value: string; // male, value which I gonna send on back
    count: number;
  }[]; // Array of category options
}

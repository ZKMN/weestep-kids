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
  }[];
  sizes: {
    id: string | number;
    value: number;
    santimeters?: number;
  }[];
}

interface ProductDetails extends Omit<IProductListItem, 'img'> {
  images: string[];
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
  }[];
  details: {
    title: string;
    description: string;
  }[];
}

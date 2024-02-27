export interface IProduct {
  name: string;
  image: string;
  price: number;
  sizeId: string;
  colorId: string;
  quantity: number;
  productId: string;
}

export interface ILocalBasketStore {
  products?: IProduct[];
}

export interface ILocalBasketStoreActions {
  addProductToLocalBasketAction: (data: IProduct) => void;
  editProductInLocalBasketAction: (data: IProduct) => void;
  removeProductFromLocalBasketAction: (id: string) => void;
}

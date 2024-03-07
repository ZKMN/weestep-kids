export interface IBasketProduct {
  type: string;
  name: string;
  image: string;
  price: number;
  size?: { id: string; value: string; };
  color?: { id: string; value: string; };
  quantity: number;
  discount: number;
  productId: string;
  available: number;
}

export interface ILocalBasketStore {
  products?: IBasketProduct[];
}

export interface ILocalBasketStoreActions {
  resetBasketProductsAction: () => void;
  increaseProductQuantityAction: (id: string) => void;
  decreaseProductQuantityAction: (id: string) => void;
  addProductToLocalBasketAction: (data: IBasketProduct) => void;
  editProductInLocalBasketAction: (data: IBasketProduct) => void;
  removeProductFromLocalBasketAction: (id: string) => void;
}

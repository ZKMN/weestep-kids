export interface ILocalBasketStore {
  products: {
    name: string;
    image: string;
    price: number;
    sizeId: string;
    colorId: string;
    quantity: number;
    productId: string;
  }[];
}

export interface ILocalBasketStoreActions {
  addProductToLocalBasketAction: (data: Record<string, unknown>) => void;
  editProductInLocalBasketAction: (data: Record<string, unknown>) => void;
  removeProductFromLocalBasketAction: (id: string) => void;
}

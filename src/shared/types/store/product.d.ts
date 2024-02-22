export interface IProductStore {
  id: string;
  name: string;
  price: number;
  values: {
    sizeId: number;
    quantity: number;
  };
}

export interface IProductStoreActions {
  initProductSuccessAction: (data: IProductIngredients) => void;
  setProductSizeAction: (size: IChoice) => void;
  setProductSpiceAction: (spice: IChoice) => void;
  setProductQuantityAction: (qty: number) => void;
  setProductInstructionsAction: (instructions: string) => void;
  addIngredientAction: (additive: IChoice) => void;
  removeIngredientAction: (additive: IChoice) => void;
}

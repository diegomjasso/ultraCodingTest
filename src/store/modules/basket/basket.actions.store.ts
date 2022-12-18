import { createAction, props } from "@ngrx/store";
import { Product } from "../../../types/product.type";

export const addProduct = createAction('[Basket Component] Add Product', props<Product>());
export const removeProduct = createAction('[Basket Component] Remove Product', props<{productIndex: number}>());
export const flushProducts = createAction('[Basket Component] Flush Product');
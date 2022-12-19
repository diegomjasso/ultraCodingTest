import { createAction, props } from '@ngrx/store'
import { Product } from '../../../types/product.type'

export const fetchProductList = createAction(
    '[All Products] Fetch Products List',
);

export const fetchProductListSuccess = createAction(
    '[All Products] Fetch Products List Success',
props<{ products: Product[] }>(),
);

export const fetchProductListFail = createAction(
    '[All Products] Fetch Products List Fail',
props<{ error: any}>()
);

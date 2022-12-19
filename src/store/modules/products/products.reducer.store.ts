import { createReducer, on } from '@ngrx/store'
import {
    fetchProductList,
    fetchProductListFail,
    fetchProductListSuccess,
} from './products.actions.store';
import { Product } from '../../../types/product.type';
import { Products } from '../../entities';

export const initialProductsState: Products = {
    allProducts: [],
    hasFetched: false,
    hasError: false,
    isFetching: false,
    error: null
}

export const productsReducer = createReducer(
    initialProductsState,
    on(fetchProductList, (state) => {return {...state, isFetching: true}}),
    on(fetchProductListSuccess, (state, {products}) => {
      return {
        ...state,
        hasError: false,
        hasFetched: true,
        isFetching: false,
        error: null,
        allProducts: products
      } 
    }),
    on(fetchProductListFail, (state, {error}) => {
      return {
        ...state,
        allProducts: [],
        hasError: true,
        hasFetched: false,
        isFetching: false,
        error: error
      } 
    })
)

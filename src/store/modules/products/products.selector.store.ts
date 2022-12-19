import { createSelector, createFeatureSelector } from '@ngrx/store'
import { Products } from 'src/store/entities'

export const productsFeatureState = createFeatureSelector<Products>('products')
export const selectProducts = createSelector(
    productsFeatureState,
    (state: Products) => state
)

export const selectProductsAllProducts = createSelector(
    productsFeatureState,
    (state: Products) => state.allProducts
)

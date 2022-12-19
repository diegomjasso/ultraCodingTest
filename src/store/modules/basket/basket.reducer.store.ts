import { createReducer, on } from '@ngrx/store'
import {
    addProduct,
    flushProducts,
    removeProduct
} from './basket.actions.store'
import { Product } from '../../../types/product.type'
import { Basket } from '../../entities'

export const initialBasketState: Basket = {
    products: []
}

export const basketReducer = createReducer(
    initialBasketState,
    on(addProduct, (state, productPayload) => {
        const newProducts: Product[] | undefined = [...state.products]
        if (newProducts) {
            newProducts.push(productPayload)
        }
        return {
            ...state,
            products: newProducts
        }
    }),
    on(removeProduct, (state, { productIndex }) => {
        const newProducts: Product[] | undefined = []
        state.products?.forEach((product: Product, i: number) => {
            if (i !== productIndex) {
                newProducts.push(product)
            }
        })
        return {
            ...state,
            products: newProducts
        }
    }),
    on(flushProducts, (state) => {
        return {
            ...state,
            products: []
        }
    })
)

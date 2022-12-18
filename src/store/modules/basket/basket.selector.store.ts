import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Basket } from "src/store/entities";

export const basketFeatureState = createFeatureSelector<Basket>('basket');
export const selectBasket = createSelector(
    basketFeatureState,
    (state: Basket) => state
)

export const selectBasketProducts = createSelector(
    basketFeatureState,
    (state: Basket) => state.products
)
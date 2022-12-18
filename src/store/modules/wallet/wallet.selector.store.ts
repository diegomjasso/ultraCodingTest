import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Wallet } from "../../entities";

export const walletFeatureState = createFeatureSelector<Wallet>('wallet');
export const selectWallet = createSelector(
    walletFeatureState,
    (state: Wallet) => state
)

export const selectBalance= createSelector(
    walletFeatureState,
    (state: Wallet) => state.balance
)
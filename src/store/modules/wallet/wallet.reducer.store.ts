import { createReducer, on } from "@ngrx/store";
import { updateBalance } from "./wallet.actions.store";
import { Product } from '../../../types/product.type';
import { Wallet } from "../../entities";

export const initialWalletState: Wallet = {
    balance: 100
};

export const walletReducer = createReducer(
    initialWalletState,
    on(updateBalance, (state, {newBalance}) => {
        return {
            ...state,
            balance: newBalance
        }
    })
)
import * as basketActions from './basket/basket.actions.store';
import * as basketReducer from './basket/basket.reducer.store';
import * as basketSelectors from './basket/basket.selector.store';
import * as walletActions from './wallet/wallet.actions.store';
import * as walletReducer from './wallet/wallet.reducer.store';
import * as walletSelectors from './wallet/wallet.selector.store';
import * as productsActions from './products/products.actions.store';
import * as productsReducer from './products/products.reducer.store';
import * as productsSelectors from './products/products.selector.store';

import * as productsEffects from './products/products.effects.store';

const Modules = {
    basketModule: {
        actions: basketActions,
        reducer: basketReducer,
        selectors: basketSelectors
    },
    walletModule: {
        actions: walletActions,
        reducer: walletReducer,
        selectors: walletSelectors
    },
    productsModule: {
        actions: productsActions,
        reducer: productsReducer,
        selectors: productsSelectors,
        effects: productsEffects
    }
};

export default Modules;

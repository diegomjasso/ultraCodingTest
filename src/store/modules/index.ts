import * as basketActions from './basket/basket.actions.store';
import * as basketReducer from './basket/basket.reducer.store';
import * as basketSelectors from './basket/basket.selector.store';
import * as walletActions from './wallet/wallet.actions.store';
import * as walletReducer from './wallet/wallet.reducer.store';
import * as walletSelectors from './wallet/wallet.selector.store';
const Modules = {
    basketModule: {
        actions: basketActions,
        reducer: basketReducer,
        selectos: basketSelectors ,

    },
    walletModule: {
        actions: walletActions,
        reducer: walletReducer,
        selectos: walletSelectors,
    }
};

export default Modules;
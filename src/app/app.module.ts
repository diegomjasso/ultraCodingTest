import { InjectionToken, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BasketComponent } from './core/basket/basket.component'
import { HeaderComponent } from './core/header/header.component'
import { WalletComponent } from './core/wallet/wallet.component'
import { BasketPageComponent } from './pages/basket/basket.component'
import { CheckoutComponent } from './pages/checkout/checkout.component'
import { MarketHomeComponent } from './pages/market-home/market-home.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ProductComponent } from './core/product/product.component'
import { BasketProductComponent } from './core/basket-product/basket-product.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import appStore from 'src/store'
import { allProducts } from './data/fake-data';

export const FAKE_PRODUCTS = new InjectionToken('Fake data');

@NgModule({
    declarations: [
        AppComponent,
        MarketHomeComponent,
        BasketPageComponent,
        CheckoutComponent,
        BasketComponent,
        WalletComponent,
        HeaderComponent,
        ProductComponent,
        BasketProductComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({
            basket: appStore.modules.basketModule.reducer.basketReducer,
            wallet: appStore.modules.walletModule.reducer.walletReducer,
            products: appStore.modules.productsModule.reducer.productsReducer
        }),
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        EffectsModule.forRoot([appStore.modules.productsModule.effects.productsEffects]),
    ],
    providers: [
      {
        provide: FAKE_PRODUCTS,
        useValue: allProducts,
      },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

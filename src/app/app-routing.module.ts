import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketPageComponent } from './pages/basket/basket.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { MarketHomeComponent } from './pages/market-home/market-home.component';

const routes: Routes = [
  {
    path: 'basket',
    component: BasketPageComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: '',
    component: MarketHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

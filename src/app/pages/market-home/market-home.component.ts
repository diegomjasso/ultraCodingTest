import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'
import appStore from 'src/store'
import { selectProductsAllProducts } from 'src/store/modules/products/products.selector.store'
import { Product } from '../../../types/product.type'

@Component({
    selector: 'app-market-home',
    templateUrl: './market-home.component.html',
    styleUrls: ['./market-home.component.scss']
})
export class MarketHomeComponent implements OnInit, OnDestroy{
    itemsPeerColumn = 4
    splitArray = (array: any[]) => {
        const finalArray = []
        for (let i = 0; i < array.length; i += this.itemsPeerColumn) {
            finalArray.push(array.slice(i, i + this.itemsPeerColumn))
        }
        return finalArray
    }
    subs: Subscription[] = [];
    data: any[] = []
    allProducts$: Observable<Product[]> = this.store.select(selectProductsAllProducts);

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.subs.push(this.allProducts$.subscribe((allProducts: Product[]) => {
            this.data = this.splitArray(allProducts);
        }));
        this.store.dispatch(appStore.modules.productsModule.actions.fetchProductList());
    }

    ngOnDestroy(): void {
        
    }

    addToBasket($event: any, product: Product) {
        if ($event) {
            this.store.dispatch(
                appStore.modules.basketModule.actions.addProduct(product)
            )
        }
    }
}

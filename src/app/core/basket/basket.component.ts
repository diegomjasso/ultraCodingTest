import { Component, OnDestroy, OnInit } from '@angular/core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectBasketProducts } from '../../../store/modules/basket/basket.selector.store';
import { Product } from '../../../types/product.type';

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {
    faShoppingBasket = faShoppingBasket;
    productsSelected: Product[] = [];
    subs: Subscription[] = [];
    productSelected$: Observable<Product[]> =
        this.store.select(selectBasketProducts);

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.subs.push(
            this.productSelected$.subscribe((products) => {
                this.productsSelected = products;
            })
        );
    }

    ngOnDestroy(): void {
        this.subs.forEach((sub) => {
            sub.unsubscribe();
        });
    }
}

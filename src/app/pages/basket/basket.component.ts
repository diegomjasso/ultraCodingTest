import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'
import appStore from 'src/store'
import { selectBasketProducts } from 'src/store/modules/basket/basket.selector.store'
import { selectBalance } from 'src/store/modules/wallet/wallet.selector.store'
import { Product } from '../../../types/product.type'

@Component({
    selector: 'app-basket-page',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss']
})
export class BasketPageComponent {
    productsSelected: Product[] = []
    balanceError: boolean = false
    subs: Subscription[] = []
    balance$: Observable<number> = this.store.select(selectBalance)
    balanace: number = 0
    productSelected$: Observable<Product[]> =
        this.store.select(selectBasketProducts)
    totalAmount: number = 0
    constructor(private store: Store, private router: Router) {}

    ngOnInit(): void {
        this.subs.push(
            this.productSelected$.subscribe((products) => {
                this.productsSelected = products
                this.totalAmount = products.reduce(
                    (sum: number = 0, currentProduct: Product) => {
                        return sum + currentProduct.price
                    },
                    0
                )
                this.balanceError = this.balanace < this.totalAmount
            })
        )
        this.subs.push(
            this.balance$.subscribe((balance) => {
                this.balanace = balance
                this.balanceError = this.balanace < this.totalAmount
            })
        )
    }

    ngOnDestroy(): void {
        this.subs.forEach((sub) => {
            sub.unsubscribe()
        })
    }

    goToCheckout($event: any) {
        if ($event && this.productsSelected.length > 0) {
            this.router.navigate(['/checkout'])
        }
    }
}

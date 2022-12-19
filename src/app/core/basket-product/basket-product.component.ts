import { Component, Input } from '@angular/core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store'
import appStore from 'src/store'
import { Product } from '../../../types/product.type'

@Component({
    selector: 'app-basket-product',
    templateUrl: './basket-product.component.html',
    styleUrls: ['./basket-product.component.scss']
})
export class BasketProductComponent {
    @Input() product!: Product
    @Input() ind: number | null = null
    faTrash = faTrash

    constructor(private store: Store) {}

    removeItem($event: any) {
        console.log('$event', $event)
        console.log('this.ind', this.ind)
        if ($event && this.ind !== null) {
            this.store.dispatch(
                appStore.modules.basketModule.actions.removeProduct({
                    productIndex: this.ind
                })
            )
        }
    }
}

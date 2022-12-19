import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import appStore from 'src/store'
import { Product } from '../../../types/product.type'

@Component({
    selector: 'app-market-home',
    templateUrl: './market-home.component.html',
    styleUrls: ['./market-home.component.scss']
})
export class MarketHomeComponent {
    itemsPeerColumn = 4
    splitArray = (array: any[]) => {
        const finalArray = []
        for (let i = 0; i < array.length; i += this.itemsPeerColumn) {
            finalArray.push(array.slice(i, i + this.itemsPeerColumn))
        }
        return finalArray
    }

    products: Product[] = [
        {
            imagePath: '',
            productName: 'Product 1',
            price: 30
        },
        {
            imagePath: '',
            productName: 'Product 2',
            price: 32
        },
        {
            imagePath: '',
            productName: 'Product 3',
            price: 14
        },
        {
            imagePath: '',
            productName: 'Product 4',
            price: 33
        },
        {
            imagePath: '',
            productName: 'Product 5',
            price: 30
        },
        {
            imagePath: '',
            productName: 'Product 6',
            price: 30
        },
        {
            imagePath: '',
            productName: 'Product 7',
            price: 55
        },
        {
            imagePath: '',
            productName: 'Product 8',
            price: 10
        },
        {
            imagePath: '',
            productName: 'Product 9',
            price: 23
        },
        {
            imagePath: '',
            productName: 'Product 10',
            price: 21
        },
        {
            imagePath: '',
            productName: 'Product 11',
            price: 31
        }
    ]

    data: any[] = []

    constructor(private store: Store) {
        this.data = this.splitArray(this.products)
    }

    addToBasket($event: any, product: Product) {
        if ($event) {
            this.store.dispatch(
                appStore.modules.basketModule.actions.addProduct(product)
            )
        }
    }
}

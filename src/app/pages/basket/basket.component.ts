import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../../../types/product.type";

@Component({
    selector: 'app-basket-page',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss']
})
export class BasketPageComponent {
    productsSelected: Product[] = [
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
    ];
    balanceError: boolean = false;

    constructor(private router: Router) {}

    removeItem($event: any, index: number) {
        if ($event) {
            
        }
    }

    goToCheckout($event: any) {
        if ($event) {
            this.router.navigate(['/checkout']);
        }
    }
}
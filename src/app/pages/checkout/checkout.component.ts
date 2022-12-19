import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import appStore from '../../../store';
import { Product } from '../../../types/product.type';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
    processCompleted: boolean = false;
    productSelected$: Observable<Product[]> = this.store.select(
        appStore.modules.basketModule.selectors.selectBasketProducts
    );
    totalAmount: number = 0;
    balance$: Observable<number> = this.store.select(
        appStore.modules.walletModule.selectors.selectBalance
    );
    balanace: number = 0;
    userForm = new FormGroup({
        name: new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required])
        }),
        address: new FormGroup({
            state: new FormControl('', [Validators.required]),
            street: new FormControl('', [Validators.required]),
            city: new FormControl('', [Validators.required])
        }),
        email: new FormControl('', [Validators.required, Validators.email])
    });
    subs: Subscription[] = [];

    constructor(private router: Router, private store: Store) {}

    ngOnInit(): void {
        this.subs.push(
            this.productSelected$.subscribe((products) => {
                this.totalAmount = products.reduce(
                    (sum: number = 0, currentProduct: Product) => {
                        return sum + currentProduct.price;
                    },
                    0
                );
            })
        );
        this.subs.push(
            this.balance$.subscribe((balance) => {
                this.balanace = balance;
            })
        );
    }

    submitPayment($event: any) {
        if ($event) {
            const newBalance = this.balanace - this.totalAmount;
            console.log('newBalance', newBalance);
            this.store.dispatch(
                appStore.modules.walletModule.actions.updateBalance({
                    newBalance: newBalance
                })
            );
            this.store.dispatch(
                appStore.modules.basketModule.actions.flushProducts()
            );
            this.processCompleted = true;
        }
    }

    goToHome() {
        this.router.navigate(['/']);
    }
}

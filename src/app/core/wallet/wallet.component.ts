import { Component } from '@angular/core';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectBalance } from '../../../store/modules/wallet/wallet.selector.store';

@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.component.html',
    styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {
    faWallet = faWallet;
    balance$: Observable<number> = this.store.select(selectBalance);
    balanace: number = 0;
    subs: Subscription[] = [];

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.subs.push(
            this.balance$.subscribe((balance) => {
                this.balanace = balance;
            })
        );
    }
}

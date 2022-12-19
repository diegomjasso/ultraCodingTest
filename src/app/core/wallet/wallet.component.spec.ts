import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WalletComponent } from './wallet.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Wallet } from '../../../store/entities';
import appStore from '../../../../src/store';
import { CurrencyPipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('WalletComponent', () => {
    const initialWalletState: Wallet = {
        balance: 0
    };
    const newBalance: number = 299;
    let fixture: ComponentFixture<WalletComponent>;
    let component: WalletComponent;
    let store: MockStore;
    const locale: string = 'en-US';
    const currencyPipe = new CurrencyPipe(locale);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, CurrencyPipe],
            declarations: [WalletComponent],
            providers: [provideMockStore({ initialState: initialWalletState })],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        store = TestBed.inject(MockStore);
        fixture = TestBed.createComponent(WalletComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should create the component and not dispslay the balance if the state balance is 0', async () => {
        await expect(component).toBeTruthy();
        await fixture.detectChanges();
        await fixture.whenStable().then(async () => {
            const walletRoot = await document.querySelector(
                'div.wallet-root > span'
            );
            await expect(walletRoot?.innerHTML);
            await expect(walletRoot?.innerHTML).toBe(
                currencyPipe.transform(initialWalletState.balance)
            );
        });
    });

    it('should create the component and dispslay the balance', async () => {
        await store.overrideSelector(
            appStore.modules.walletModule.selectors.selectBalance,
            newBalance
        );
        await store.refreshState();
        await expect(component).toBeTruthy();
        await fixture.detectChanges();
        await fixture.whenStable().then(async () => {
            const walletRoot = await document.querySelector(
                'div.wallet-root > span'
            );
            await expect(walletRoot?.innerHTML);
            await expect(walletRoot?.innerHTML).toBe(
                currencyPipe.transform(newBalance)
            );
        });
    });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BasketComponent } from './basket.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Basket } from '../../../store/entities';
import appStore from '../../../../src/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Product } from '../../../types/product.type';

describe('BasketComponent', () => {
    const initialBasketState: Basket = {
        products: []
    };
    const products: Product[] = [
        {
            imagePath: '',
            productName: 'Product Test 8',
            price: 10
        },
        {
            imagePath: '',
            productName: 'Product Test 9',
            price: 23
        }
    ];
    let fixture: ComponentFixture<BasketComponent>;
    let component: BasketComponent;
    let store: MockStore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [BasketComponent],
            providers: [provideMockStore({ initialState: initialBasketState })],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        store = TestBed.inject(MockStore);
        fixture = TestBed.createComponent(BasketComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should create the component and not dispslay the list of products if the state is empty', async () => {
        await expect(component).toBeTruthy();
        await fixture.detectChanges();
        await fixture.whenStable().then(async () => {
            const basketRoot = await document.querySelector(
                'div.basket-root > span'
            );
            await expect(basketRoot?.innerHTML);
            await expect(basketRoot?.innerHTML).toBe(
                JSON.stringify(initialBasketState.products.length)
            );
        });
    });

    it('should create the component and dispslay the list of products if the state has products', async () => {
        await store.overrideSelector(
            appStore.modules.basketModule.selectors.selectBasketProducts,
            products
        );
        await store.refreshState();
        await expect(component).toBeTruthy();
        await fixture.detectChanges();
        await fixture.whenStable().then(async () => {
            const basketRoot = await document.querySelector(
                'div.basket-root > span'
            );
            await expect(basketRoot?.innerHTML);
            await expect(basketRoot?.innerHTML).toBe(
                JSON.stringify(products.length)
            );
        });
    });
});

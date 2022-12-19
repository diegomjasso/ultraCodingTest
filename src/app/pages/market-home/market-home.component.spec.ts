import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MarketHomeComponent } from './market-home.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Products } from '../../../store/entities';
import appStore from '../../../store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MarketHomeComponent', () => {
    let fixture: ComponentFixture<MarketHomeComponent>;
    let component: MarketHomeComponent;
    const initialProductsState: Products = {
        allProducts: [],
        isFetching: false,
        hasError: false,
        hasFetched: false,
        error: null
    };
    const productsState: Products = {
        allProducts: [
            {
                imagePath: '',
                productName: 'Product Test 8',
                price: 10
            },
            {
                imagePath: '',
                productName: 'Product Test 9',
                price: 23
            },
            {
                imagePath: '',
                productName: 'Product Test 10',
                price: 21
            },
            {
                imagePath: '',
                productName: 'Product Test 11',
                price: 31
            }
        ],
        isFetching: false,
        hasError: false,
        hasFetched: false,
        error: null
    };
    let store: MockStore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [MarketHomeComponent],
            providers: [
                provideMockStore({ initialState: initialProductsState })
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        store = TestBed.inject(MockStore);
        fixture = TestBed.createComponent(MarketHomeComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should create the component and not dispslay the list of products if the state is empty', async () => {
        await expect(component).toBeTruthy();
        await fixture.detectChanges();
        await fixture.whenStable().then(async () => {
            const products = await document.querySelectorAll('app-product');
            await expect(products);
            await expect(products.length).toBe(0);
        });
    });

    it('should create the component and dispslay the list of products if the state has products', async () => {
        await store.overrideSelector(
            appStore.modules.productsModule.selectors.selectProductsAllProducts,
            productsState.allProducts
        );
        await store.refreshState();
        await expect(component).toBeTruthy();
        await fixture.detectChanges();
        await fixture.whenStable().then(async () => {
            const products = await document.querySelectorAll('app-product');
            await expect(products);
            await expect(products.length).toBe(
                productsState.allProducts.length
            );
        });
    });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Basket } from 'src/store/entities';
import { Product } from 'src/types/product.type';
import { BasketProductComponent } from './basket-product.component';

describe('BasketProductComponent', () => {
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
    let fixture: ComponentFixture<BasketProductComponent>;
    let component: BasketProductComponent;
    let store: MockStore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [BasketProductComponent],
            providers: [provideMockStore({ initialState: initialBasketState })],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        store = TestBed.inject(MockStore);
        fixture = TestBed.createComponent(BasketProductComponent);
        component = fixture.componentInstance;
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
});

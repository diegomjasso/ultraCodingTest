import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BasketComponent } from '../basket/basket.component';
import { WalletComponent } from '../wallet/wallet.component';
import { HeaderComponent } from './header.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('HeaderComponent', () => {
    let fixture: ComponentFixture<HeaderComponent>;
    let component: HeaderComponent;
    let store: MockStore;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [HeaderComponent, WalletComponent, BasketComponent],
            providers: [provideMockStore({ initialState: {} })],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        store = TestBed.inject(MockStore);
    });

    it('should create the component', () => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});

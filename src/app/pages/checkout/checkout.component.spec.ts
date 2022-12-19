import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CheckoutComponent } from './checkout.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('CheckoutComponent', () => {
    let fixture: ComponentFixture<CheckoutComponent>;
    let component: CheckoutComponent;
    let store: MockStore;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [CheckoutComponent],
            providers: [provideMockStore({ initialState: {} })],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        store = TestBed.inject(MockStore);
    });

    it('should create the component', () => {
        fixture = TestBed.createComponent(CheckoutComponent);
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});

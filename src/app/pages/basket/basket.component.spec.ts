import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BasketPageComponent } from './basket.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('BasketPageComponent', () => {
    let fixture: ComponentFixture<BasketPageComponent>;
    let component: BasketPageComponent;
    let store: MockStore;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [BasketPageComponent],
            providers: [provideMockStore({ initialState: {} })],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        store = TestBed.inject(MockStore);
    });

    it('should create the component', () => {
        fixture = TestBed.createComponent(BasketPageComponent);
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});

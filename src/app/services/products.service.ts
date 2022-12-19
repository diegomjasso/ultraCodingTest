import { Inject, Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/types/product.type';
import { FAKE_PRODUCTS } from '../app.module';

export const responseTime = 1000;

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(@Inject(FAKE_PRODUCTS) private fakeProducts: Product[]) {
  }

  public fetchProducts(): Observable<Product[]> {
    return timer(responseTime).pipe(
      map(() => this.fakeProducts),
    );
  }
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as productsActions from './products.actions.store';
import { ProductsService } from '../../../app/services/products.service';
import { Product } from 'src/types/product.type';

@Injectable()
export class productsEffects {
  public fetchProductsList = createEffect(() =>
    this.actions$.pipe(
      ofType(productsActions.fetchProductList),
      exhaustMap(action =>
        this.productsService.fetchProducts().pipe(
          map((response: Product[]) => {
            return productsActions.fetchProductListSuccess({products: response})
          }),
          catchError((error: any) => of(productsActions.fetchProductListFail(error)))
        )
      ),
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
  ) {
  }
}

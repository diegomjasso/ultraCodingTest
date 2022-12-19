import { Observable, of } from 'rxjs';
import { Product } from 'src/types/product.type';
import { ProductsService } from '../products.service';

export class TestingProductsService implements Partial<ProductsService> {
    private _productList: Product[] = [];
    private _product!: Product | undefined;

    constructor(
        productList: Product[],
        product: Product | undefined = undefined
    ) {
        this._productList = [...productList];
        this._product = product;
    }

    public fetchProducts(): Observable<Product[]> {
        return of(this._productList);
    }
}

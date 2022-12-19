import { Product } from '../../types/product.type'

export class Products {
    allProducts: Product[] = [];
    isFetching: boolean = false;
    hasError: boolean = false;
    hasFetched: boolean = false; 
    error: any = null;
}
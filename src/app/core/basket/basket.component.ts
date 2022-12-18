import { Component } from "@angular/core";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../../../types/product.type";

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
    faShoppingBasket = faShoppingBasket;
    productsSelected: Product[] = [];

    constructor() {

    }
}
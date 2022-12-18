import { Component, Input } from "@angular/core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Product } from "../../../types/product.type";

@Component({
    selector: 'app-basket-product',
    templateUrl: './basket-product.component.html',
    styleUrls: ['./basket-product.component.scss']
})
export class BasketProductComponent {
    @Input() product!: Product;

    faTrash = faTrash;

    constructor() {}

    removeItem($event: any) {
        if ($event) {
            console.log("removeItem product", this.product);
        }
    }
}
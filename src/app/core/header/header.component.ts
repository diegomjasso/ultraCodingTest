import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Input() header: string = 'Marketplace';

    constructor(private router: Router) {}

    goToHome() {
        this.router.navigate(['/']);
    }

    goToBasket() {
        this.router.navigate(['/basket'])
    }
}
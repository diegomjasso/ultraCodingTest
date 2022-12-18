import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from "@angular/router";

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
    processCompleted: boolean = false;

    userForm = new FormGroup({
        name: new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
        }),
        address: new FormGroup({
            state: new FormControl('', [Validators.required]),
            street: new FormControl('', [Validators.required]),
            city: new FormControl('', [Validators.required]),
        }),
        email: new FormControl('', [Validators.required, Validators.email])
    });

    constructor(private router: Router) {}

    submitPayment($event: any) {
        if ($event) {
            console.log('this.userForm.value', this.userForm.value);
            this.processCompleted = true;
        }
    }

    goToHome() {
        this.router.navigate(['/']);
    }
}
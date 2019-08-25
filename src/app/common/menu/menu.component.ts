import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss']
})

export class MenuComponent implements OnInit {
    constructor(private router: Router) {

    }

    ngOnInit() {

    }
    callCamera() {
        this.router.navigate(['/home']).then(res => {
            document.getElementById('event').click();
        });

    }

    callProductCatalog() {
        this.router.navigate(['/home/productos'])
    }

    callCustomerProfile() {
        this.router.navigate(['/home/customer/profile'])
    }
}
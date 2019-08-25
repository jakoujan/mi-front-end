import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';


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
        console.log('me clickeaste');
        document.getElementById('event').click()
    }

    callProductCatalog() {
        console.log('me clickeaste');
        this.router.navigate(['/productos'])
    }
}
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss']
})

export class MenuComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {

    }
    callCamera() {
        console.log('me clickeaste');
        document.getElementById('event').click()
    }

    callProductCatalog() {
        console.log('me clickeaste');
        this.router.navigate(['/home'])
    }
}
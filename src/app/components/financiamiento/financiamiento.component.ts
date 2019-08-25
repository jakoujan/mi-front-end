import { Component, OnInit } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';

@Component({
    selector: 'financiamiento',
    templateUrl: 'financiamiento.component.html',
    styleUrls: ['financiamiento.component.scss']
})

export class FinanciamientoComponent implements OnInit{
    products:any
    constructor(private persistenceService : PersistenceService){

    }
    ngOnInit(){
        this.products = this.persistenceService.get('product', StorageType.SESSION);
        console.log(this.products)
    }
}
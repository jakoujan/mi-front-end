import { Component, OnInit } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';

@Component({
    selector: 'financiamiento',
    templateUrl: 'financiamiento.component.html',
    styleUrls: ['financiamiento.component.scss']
})

export class FinanciamientoComponent implements OnInit{
    products:any
    opciones: any[] = [
        {value: '18 meses', viewValue: '18 meses'},
        {value: '12 meses', viewValue: '12 meses'},
        {value: '6 meses', viewValue: '6 meses'}
      ];
    constructor(private persistenceService : PersistenceService){

    }
    ngOnInit(){
        this.products = this.persistenceService.get('product', StorageType.SESSION);
        console.log(this.products)
    }
}
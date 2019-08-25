import { Component, OnInit } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';
import { IProduct } from 'src/app/entity/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss']
})
export class BuyProductComponent implements OnInit {

  product: IProduct;
  formbuy: FormGroup;
  opciones: any[] = [
    {value: 'financiado', viewValue: 'financiado'},
    {value: 'contado', viewValue: 'contado'}
  ];
  seleccionada = this.opciones[0].value;

  constructor(
    private fb: FormBuilder, 
    private persistenceService: PersistenceService,
    private router : Router
    ) { }

  ngOnInit() {
    this.formbuy = this.fb.group({
      pago: ['', [Validators.required]],
      
  })
    this.product = this.persistenceService.get('product', StorageType.SESSION);
    console.log(this.product);
  }

  selectOption(valor){
    console.log(valor)
  }

  payment(){
    if(this.formbuy.controls.pago.value === 'contado'){
      this.router.navigate(['/home/producto/comprar/qr'])
    }else{
      this.router.navigate(['/home/producto/comprar/financiamiento'])
    }
  }

}

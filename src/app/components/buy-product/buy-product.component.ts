import { Component, OnInit } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';
import { IProduct } from 'src/app/entity/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss']
})
export class BuyProductComponent implements OnInit {

  product: IProduct;
  formbuy: FormGroup;

  constructor(private fb: FormBuilder, private persistenceService: PersistenceService) { }

  ngOnInit() {
    this.formbuy = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]]
  })
    this.product = this.persistenceService.get('product', StorageType.SESSION);
    console.log(this.product);
  }

}

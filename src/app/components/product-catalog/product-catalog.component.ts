import { Component, OnInit } from '@angular/core';
import { ProductCatalogService } from 'src/app/services/product-catalog.service';
import { IProduct } from 'src/app/entity/product';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {

  constructor(private productService: ProductCatalogService) {

  
  }

  products: Array<IProduct>;

  ngOnInit() {
    this.productService.catalog().then(response => {
      this.products = response.fields.products;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductCatalogService } from 'src/app/services/product-catalog.service';
import { IProduct } from 'src/app/entity/product';
import { PersistenceService, StorageType } from 'angular-persistence';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {

  constructor(private productService: ProductCatalogService, private persistenceService: PersistenceService, private router: Router) {

  
  }

  products: Array<IProduct>;

  ngOnInit() {
    this.productService.catalog().then(response => {
      this.products = response.fields.products;
    })
  }

  buyProduct(product: IProduct) {
    this.persistenceService.set('product', product, {type: StorageType.SESSION, oneUse: true});
    this.router.navigate(['/home/producto/comprar']);
}

}

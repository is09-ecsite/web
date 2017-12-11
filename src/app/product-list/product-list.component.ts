import { Component, OnInit } from '@angular/core';

import { Product } from '../struct/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        for (let i = products.length - 1; 0 < i; i--) {
          let r = Math.floor(Math.random() * (i + 1));
          [products[i], products[r]] = [products[r], products[i]];
        }
        this.products = products
      });
  }
}

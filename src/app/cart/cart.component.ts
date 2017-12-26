import { Component, OnInit } from '@angular/core';

import { Cart } from '../struct/cart';
import { Product } from '../struct/product';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

export class Struct {
  count  : number;
  product: Product;
}

@Component({
  selector   : 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls  : ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  countList    = [...Array(10)].map((x,i)=>i+1);
  products     : Product[] = [];
  protectedCart: Cart[] = [];
  structs      : Struct[] = [];
  subscribeId  : string;

  years = [2010,2011,2012,2013,2014];
  selectedYear = 2014;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;

        this.subscribeId = this.cartService.subscribe(carts => 
          this.structs = this.toStructs(products, carts)
        );
      });
  }

  ngOnDestroy() {
    this.subscribeId && this.cartService.unsubscribe(this.subscribeId);
  }

  chageCount(productId: number, event) {
    console.log('chageCount');
    console.log(productId, parseInt(event.target.selectedOptions[0].value));
  }

  clearCart() {
    this.cartService.setCarts([]);
    this.structs = [];
  }

  clearCartById(productId) {
    const carts = (
      this.cartService.setCarts(
        this.cartService
          .getCarts()
          .filter(c => c.id != productId)
      )
    );

    this.structs = this.toStructs(this.products, carts);
  }
  
  private toStructs(products: Product[], carts: Cart[]): Struct[] {
    const cartIds = carts.map(c => c.id);

    return (
      products.filter(p => cartIds.includes(p.id))
        .map(product => {
          let struct     = new Struct();
          struct.count   = carts.find(c => c.id == product.id).purchaseNumber;
          struct.product = product;
          return struct;
        })
    );
  }
}

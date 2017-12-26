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

  // countList    = [...Array(10)].map((x,i) => ({value: i+1}));
  // js は難しい
  countList    = [{value: 1},{value: 2},{value: 3},{value: 4},{value: 5},{value: 6},{value: 7},{value: 8},{value: 9},{value: 10}]
  products     : Product[] = [];
  protectedCart: Cart[] = [];
  structs      : Struct[] = [];
  subscribeId  : string;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { console.log(this.countList)}

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

  changeCount(struct: Struct) {
    this.cartService.setCarts(
      this.cartService
        .getCarts()
        .map(x => {
          if (x.id == struct.product.id)
            x.purchaseNumber = struct.count;
          return x;
        })
    )
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

  getTotalPrice(): number{
    return (
      this.structs.map(x => x.product.price * x.count)
        .reduce((p, n) => p + n, 0)
    )
  }
}

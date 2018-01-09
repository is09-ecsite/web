import { Component, OnInit } from '@angular/core';
import {CartService} from '../service/cart.service';
import {ProductService} from '../service/product.service';
import {Cart} from '../struct/cart';
import {Product} from '../struct/product';
import {SettlementService} from "../service/settlement.service";

export class Struct {
  count  : number;
  product: Product;
}

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {

  // countList    = [...Array(10)].map((x,i) => ({value: i+1}));
  // js は難しい
  countList    = [{value: 1},{value: 2},{value: 3},{value: 4},{value: 5},{value: 6},{value: 7},{value: 8},{value: 9},{value: 10}]
  products     : Product[] = [];
  cart: Cart[] = [];
  structs      : Struct[] = [];
  subscribeId  : string;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private settlementService: SettlementService
  ) { console.log(this.settlementService);
    //settlementService.subscribe((product) => this.products = product, (cart) => this.cart = cart);
  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;

        this.subscribeId = this.cartService.subscribe(carts =>
          0
        );
      });
  }

  ngOnDestroy() {
    this.subscribeId && this.cartService.unsubscribe(this.subscribeId);
  }

  decline() {

  }

  getTotalPrice(): number {
    console.log(this.cart, this.products);
    if( this.cart.length == 0 || this.products.length == 0) return 0;
    return (
      this.cart.map(x => this.products.filter(y => y.id === x.id)[0].price * x.purchaseNumber)
        .reduce((p, n) => p + n, 0)
    );
  }

  getCart() : Cart[] {
    return this.cart;
  }
}

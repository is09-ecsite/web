import { Injectable } from '@angular/core';
import {CartService} from './cart.service';
import {ProductService} from './product.service';
import {Cart} from '../struct/cart';
import {Product} from '../struct/product';

@Injectable()
export class SettlementService {

  products: Product[] = [];
  carts: Cart[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    cartService.subscribe((item) => {
      this.carts = item;
    });

    productService.getProducts().subscribe((item) => { this.products = item;});
  }

  private subscribers = [];

  subscribe(product, cart): string {
    let id = Math.random().toString(36).slice(-10);
    this.subscribers = this.subscribers.concat({product, id});
    this.subscribers = this.subscribers.concat({cart, id});
    product(this.getProductList());
    cart(this.getCartList());
    return id;
  }


  unsubscribe(id: string) {
    this.subscribers = this.subscribers.filter(s => s.id != id);
  }

  getCartService(): CartService {
    return this.cartService;
  }

  getProductService(): ProductService {
    return this.productService;
  }

  getCartList(): Cart[] {
    return this.carts;
  }

  getProductList(): Product[] {
    return this.products;
  }

}

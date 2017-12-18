import { Component, OnInit } from '@angular/core';

import { Product } from '../struct/product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsInCart: Product[];
  constructor(
    private cartService: CartService
  ) { }

  clearCart() {
    this.productsInCart = this.cartService.removeProducts();
  }

  clearCartById(productId) {
    this.productsInCart =  this.cartService.removeProduct(productId);
  }

  ngOnInit() {
    this.productsInCart = this.cartService.getProducts();
  }

}

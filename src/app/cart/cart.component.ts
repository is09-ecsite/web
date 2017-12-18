import { Component, OnInit } from '@angular/core';

import { Cart } from '../struct/cart';
import { Product } from '../struct/product';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsInCart: Product[];
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { 
    this.cartService.subscribe(cart => {
      this.productService.getProducts()
    })
  }

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

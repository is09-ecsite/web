import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './../struct/product';

@Injectable()
export class CartService {

  constructor() { }

  /** ADD products from the localstorage */
  addProducts (product: Product) {
    this.setProducts(this.getProducts().concat(product))
  }

  /** GET products from the localstorage */
  getProducts (): Product[] {
    return JSON.parse(localStorage.getItem("cart")) as Product[];
  }

  /** check product from the localstorage */
  hasProduct (productId: number): boolean {
    return this.getProducts().some(x => x.id == productId)
  }

  /** Remove product by id on the localstorage */
  removeProduct (productId: number) {
    this.setProducts(this.getProducts().filter(x => x.id != productId))
  }

  /** Remove products on the localstorage */
  removeProducts () {
    localStorage.setItem("cart", "[]");
  }
  
  /** SET products on the localstorage */
  setProducts (products: Product[])  {
    localStorage.setItem("cart", JSON.stringify(products));
  }

}

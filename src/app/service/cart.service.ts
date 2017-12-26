import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Cart } from '../struct/cart';
import { Product } from './../struct/product';
import { ProductService } from '../service/product.service';

@Injectable()
export class CartService {

  private subscribers = [];

  constructor(
    private productService: ProductService
  ) {

    window.addEventListener(
      "message",
      e => {
        console.log('debug point');
        // domainが決まってないので全ての情報を受け取ります。
        if (e.origin) {
          // domainが決まってないのでtargetOriginは*です。
          // window.postMessage("1", "*");
          try{
            const data = JSON.parse(e.data)
            if (data.productId) {

              console.log(data.productId, "班の商品をカートに追加")

              let cart =  this.getCarts().find(c => c.id == data.productId)
              if (cart) {
                this.setCarts(
                  this.getCarts().map(c => {
                    if (c.id == data.productId) {
                      if(data.purchaseNumber)
                        c.purchaseNumber+= parseInt(data.purchaseNumber);
                      else 
                        c.purchaseNumber++;
                    }
                    return c;
                  })
                )
              } else {
                let newCart = new Cart();
                newCart.id = data.productId;
                
                if(data.purchaseNumber)
                  newCart.purchaseNumber = parseInt(data.purchaseNumber);
                else 
                  newCart.purchaseNumber = 1;
                this.setCarts(
                  this.getCarts().concat(newCart)
                )
              }
            }
          } catch (e) {}
        }
      },
      false
    );
  }
  /** GET products from the localstorage */
  getCarts (): Cart[] {
    return JSON.parse(localStorage.getItem("cart")) as Cart[] || [];
  }

  setCarts (carts: Cart[]): Cart[] {
    localStorage.setItem("cart", JSON.stringify(carts))
    for (let subscribe of this.subscribers)
      subscribe.listener(this.getCarts());
    return carts;
  }

  subscribe(listener: (Cart) => any): string {
    listener(this.getCarts());
    let id = Math.random().toString(36).slice(-10);
    this.subscribers = this.subscribers.concat({listener, id});
    return id;
  }

  unsubscribe(id: string) {
    this.subscribers = this.subscribers.filter(s => s.id != id)
  }

}

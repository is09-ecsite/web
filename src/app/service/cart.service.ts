import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './../struct/product';
import { ProductService } from '../service/product.service';

@Injectable()
export class CartService {

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
              this.productService.getProduct(data.productId)
                .subscribe(product => {
                  product && this.addProduct(product);
                })
            }
          } catch (e) {}
        }
      },
      false
    );
  }

  /** ADD products from the localstorage */
  addProducts (products: Product[]): Product[] {
    return this.setProducts(this.filterProducts(products))
  }

  /** ADD product from the localstorage */
  addProduct (product: Product): Product[] {
    return this.setProducts(this.filterProducts([product]))
  }

  /** GET products from the localstorage */
  getProducts (): Product[] {
    return JSON.parse(localStorage.getItem("cart")) as Product[] || [];
  }

  /** check product from the localstorage */
  hasProduct (productId: number): boolean {
    return this.getProducts().some(x => x.id == productId)
  }

  /** Remove product by id on the localstorage */
  removeProduct (productId: number): Product[] {
    return this.setProducts(this.getProducts().filter(x => x.id != productId))
  }

  /** Remove products on the localstorage */
  removeProducts(): Product[] {
    localStorage.setItem("cart", "[]");
    return [];
  }
  
  /** SET products on the localstorage */
  setProducts (products: Product[]) : Product[] {
    localStorage.setItem("cart", JSON.stringify(products));
    return products;
  }

  private filterProducts(products: Product[]): Product[] {
    const prevProducts = this.getProducts();
    const prevProductIds = prevProducts.map(x => x.id)

    return prevProducts.concat(
      products.filter(x => !prevProductIds.includes(x.id))
    )
  }
 
}

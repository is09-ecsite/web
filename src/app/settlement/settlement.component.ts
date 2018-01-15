import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../struct/cart';
import { Product } from '../struct/product';

import { CartService } from '../service/cart.service';
import { AuthenticationService } from '../service/authentication.service';
import { ProductService } from '../service/product.service';
import { SettlementService } from "../service/settlement.service";

import { Self } from '../struct/self';
import { Settlement } from '../struct/settlement';
import { Transition } from '../struct/transition';
import { SelfService } from '../service/self.service';

import getBalanse from '../common/getBalance';

class Struct {
  count  : number;
  product: Product;
}

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {

  products       : Product[]    = [];
  cart           : Cart[]       = [];
  termsChecked   : boolean      = false;
  prevSettlements: Settlement[] = [];
  self           : Self;
  structs        : Struct[]     = [];
  subscribeId    : string       = "";
  
  constructor(
    private authenticationService: AuthenticationService,
    private cartService          : CartService,
    private productService       : ProductService,
    private router               : Router,
    private selfService          : SelfService,
    private settlementService    : SettlementService
  ) {  }

  ngOnInit() {

    if (!this.authenticationService.getAuthentication())
      this.router.navigate(["/sign-in"]);

    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;

        this.subscribeId = this.cartService.subscribe(carts => {
          if(carts.length === 0)
            this.router.navigate(["/cart"])
          this.structs = this.toStructs(products, carts);
        });
      });

      this.selfService.getSelf().subscribe(self => this.self = self);
      this.settlementService.getSettlements().subscribe(settlements => this.prevSettlements = settlements);
  }

  ngOnDestroy() {
    this.subscribeId && this.cartService.unsubscribe(this.subscribeId);
  }

  getTotalPrice(): number {
    return (
      this.structs.map(struct => struct.product.price * struct.count)
        .reduce((p, n) => p + n, 0)
    );
  }

  getCart() : Cart[] {
    return this.cart;
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

  onBuyButtonClick() : void {
    let settlement = new Settlement();
    
    let priceSum = 0;
    settlement.transitions = this.structs.map(struct => {
      let transition = new Transition();
      transition.product_id = struct.product.id;
      transition.count      = struct.count;
      priceSum += struct.product.price * struct.count;
      return transition;
    })

    if (getBalanse(this.self, this.prevSettlements) - priceSum < 0 ) {
      alert('残高が不足しています。');
      return;
    }

    this.settlementService.addSettlement(settlement).subscribe(_ => {
      this.cartService.setCarts([]);
      this.router.navigate(["/my-page"]);
    })
  }

}

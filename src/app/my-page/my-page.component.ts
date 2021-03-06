import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Product }    from '../struct/product';
import { Settlement } from '../struct/settlement';
import { Self }       from '../struct/self';
import { Transition } from '../struct/transition';

import { AuthenticationService } from '../service/authentication.service';
import { ProductService }        from "../service/product.service";
import { SelfService }           from "../service/self.service";
import { SettlementService }     from "../service/settlement.service";

@Component({
  selector   : 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls  : ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {

  private products   : Product[]    = [];
  private settlements: Settlement[] = [];
  balance            : number       = 0;
  self               : Self         = new Self();
  structs                           = [];

  constructor(
    private authenticationService : AuthenticationService,
    private productService        : ProductService,
    private router                : Router,
    private selfService           : SelfService,
    private settlementService     : SettlementService
  ) {  }

  ngOnInit(): void {

    if (!this.authenticationService.getAuthentication()) {
      this.router.navigate(['/sign-in']);
      return;
    }


    ;(async _ => {
      await new Promise(resolve => 
        this.settlementService.getSettlements()
          .subscribe(settlements => {
            this.settlements = settlements
            resolve(settlements)
          })
      )

      await new Promise(resolve => 
        this.productService.getProducts()
          .subscribe(products => {
            this.products = products
            resolve(products)
          })
      )

      this.structs = this.settlements.map(settlement => {

        let struct = Object.assign({totalFee: 0, products: []}, settlement);

        struct.totalFee = (
          settlement.transitions 
        ? settlement.transitions
            .map(x => x.price * x.count)
            .reduce((prev, next) => prev + next, 0)
        : 0
        )

        let products = (
          settlement.transitions 
        ? settlement.transitions.map(transition => {
            let product = Object.assign({count: 0}, this.products.find(x => x.id == transition.product_id));
            product.price = transition.price;
            product.count = transition.count;
            return product;
          })
        : []
        )

        struct.products = products;

        return struct;
      })


      await new Promise(resolve => 
        this.selfService.getSelf()
          .subscribe(self => {
            if (self) {
              this.self = self;
              this.balance = self.amount - (
                this.structs
                  .map(x => x.totalFee)
                  .reduce((prev, next) => prev + next, 0)
              )
              resolve(self);
            }
          })
      )

    })()
  }

}

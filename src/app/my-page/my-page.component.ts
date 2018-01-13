import { Component, OnInit } from '@angular/core';

import { Product } from '../struct/product';
import { Settlement } from '../struct/settlement';
import { Transition } from '../struct/transition';

import { AuthenticationService } from '../service/authentication.service';
import { ProductService } from "../service/product.service";
import { SettlementService } from "../service/settlement.service";

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {

  private products   : Product[]
  private settlements: Settlement[];
  structs = [];

  constructor(
    private authenticationService : AuthenticationService,
    private productService        : ProductService,
    private settlementService     : SettlementService
  ) {  }

  ngOnInit(): void {
    (async _ => {
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

        let struct = Object.assign({totalFee: 0}, settlement);

        struct.totalFee = settlement.transitions
          .map(x => x.price * x.count)
          .reduce((prev, next) => prev + next, 0)

        let products = settlement.transitions.map(transition => {
          let product = Object.assign({count: 0}, this.products.find(x => x.id == transition.product_id));
          product.price = transition.price;
          product.count = transition.count;
          return product;
        })

        struct.products = products;

        return struct;
      })
      console.log(this.products)
      console.log(this.structs)

    })()
  }

}

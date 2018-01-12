import { Component, OnInit } from '@angular/core';

import { Product } from '../struct/product';
import { Settlement } from '../struct/settlement';
import { Transition } from '../struct/transition';

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
  private structs    = [];

  constructor(
    private productService   : ProductService,
    private settlementService: SettlementService
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
        let products = settlement.transitions.map(transition => {
          let product = Object.assign(this.products.find(x => x.id == transition.product_id));
          product.price = transition.price;
          product.count = transition.count;
          return product;
        })

        let struct = Object.assign(settlement);
        struct.totalFee = settlement.transitions
          .map(x => x.price)
          .reduce((prev, next) => prev + next, 0)

        struct.products = products;

        return struct;
      })

    })()
  }

}

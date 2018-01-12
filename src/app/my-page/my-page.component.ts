import { Component, OnInit } from '@angular/core';

import { Settlement } from '../struct/settlement';
import { Transition } from '../struct/transition';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})

export class MyPageComponent implements OnInit {

  //let settlements : Settlement[Transition[]]
  settelements:Settlement[] = [Array(10)].map((x, i) => {
    let s = new Settlement()
    s.id = i;
    
    s.transitions = [1, 2].map(y => {
      let t = new Transition()
      t.product_id = y;
      t.price = y * 1000;
      return t;
    })

    return s
  })


  constructor() {
  }

  ngOnInit(): void {
  }

  struct = {
    product: {
      id: null,
      image_url: null
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {

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

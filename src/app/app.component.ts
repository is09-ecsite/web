import { Component, OnInit } from '@angular/core';

import { Authentication } from './struct/authentication';
import { AuthenticationService } from './service/authentication.service';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  authentication: boolean = false;
  authenticationServiceSubscribeId: string;

  constructor(
    private authenticationService: AuthenticationService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.authenticationServiceSubscribeId = (
      this.authenticationService.subscribe(authentication => {
        console.log("app component authentication subscribe callback", authentication);
        this.authentication = authentication;
      })
    )
  }

}

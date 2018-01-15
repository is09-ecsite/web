import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  headerClass: string = "top";
  cartAddMessage: string = "";
  isInitial: Boolean = true;

  constructor(
    private authenticationService: AuthenticationService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authenticationServiceSubscribeId = (
      this.authenticationService.subscribe(authentication => {
        console.log("app component authentication subscribe callback", authentication);
        this.authentication = authentication;
      })
    )
    let checkHeaderPosition = () => {
      if (window.pageYOffset > 64 && this.headerClass == "top")
        this.headerClass = "middle"
      else if (window.pageYOffset < 30 && this.headerClass == "middle") 
        this.headerClass = "top"
      
      setTimeout(checkHeaderPosition, 10)
    }

    checkHeaderPosition()

    this.cartService.subscribe(c => {
      if(this.isInitial) {
        this.isInitial = false;
      } else if (this.router.url != "/cart"){
        this.cartAddMessage = "カートに商品が追加されました！"
        setTimeout(
          () => {
            this.cartAddMessage = ""
          }
          ,2000
        )
      }
    })
    
  }

}

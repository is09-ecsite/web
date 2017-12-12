import { Component, OnInit } from '@angular/core';

import { Authentication } from './struct/authentication';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  authentication = false;
  authenticationServiceSubscribeId: string;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authenticationServiceSubscribeId = (
      this.authenticationService.subscribe(authentication => {
        console.log("app component authentication subscribe callback")
        this.authentication = authentication;
      })
    )
  }

}

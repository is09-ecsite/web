import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Authentication } from '../struct/authentication';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form = new FormGroup({
    giftCode1: new FormControl("", Validators.minLength(4)),
    giftCode2: new FormControl("", Validators.minLength(4)),
    giftCode3: new FormControl("", Validators.minLength(4)),
    giftCode4: new FormControl("", Validators.minLength(4))
  });

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();

    let giftCode1 = event.target.elements["giftCode1"].value;
    let giftCode2 = event.target.elements["giftCode2"].value;
    let giftCode3 = event.target.elements["giftCode3"].value;
    let giftCode4 = event.target.elements["giftCode4"].value;

    const giftCode = giftCode1 + giftCode2 + giftCode3 + giftCode4;
  
    if (giftCode.length < 16) {
      alert("適切なgiftcodeを入力してください");
      return;
    }

    console.log(giftCode, 'gift code');
    
    this.authenticationService.createAuthentication(giftCode)
      .subscribe(authentication => {
        if(authentication)
          this.router.navigate(["/"]);
        else
          alert("ログインに失敗しました");
      });
    }
}

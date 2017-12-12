import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form = new FormGroup({
    giftCode1: new FormControl("", Validators.minLength(2)),
    giftCode2: new FormControl(""),
    giftCode3: new FormControl("", Validators.minLength(2)),
    giftCode4: new FormControl("", Validators.minLength(2))
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event) {
    let giftCode1 = event.target.elements["giftCode1"].value;
    let giftCode2 = event.target.elements["giftCode2"].value;
    let giftCode3 = event.target.elements["giftCode3"].value;
    let giftCode4 = event.target.elements["giftCode4"].value;

    const giftCode = giftCode1 + giftCode2 + giftCode3 + giftCode4;
    
    console.log(giftCode);
  }
}

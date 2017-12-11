import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text  : string;
  @Input() bgType: "flat";

  constructor() { }

  ngOnInit() {
  }

}

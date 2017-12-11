import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // horizontal or vertical
  @Input() direction = "vertical";

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {

  constructor() { 
    var myElement = angular.element( document.querySelector( '#some-id' ) );
    let pieChart = document.getElementById('pie-chart');

    console.log(pieChart);
    if (pieChart) {
      let ctx = pieChart.getContext('2d');
      ctx.beginPath();
      ctx.arc(70, 70, 60, 10 * Math.PI / 180, 80 * Math.PI / 180, true);
      ctx.fill();
    }
  }

  ngOnInit() {
  }

}

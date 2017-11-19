import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  months: Array<string>;
  years: Array<number>;
  constructor() { }

  ngOnInit() {
    this.months = [
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    this.years = [
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025,
      2026,
      2027,
      2028,
      2029,
      2030
    ];
  }

}

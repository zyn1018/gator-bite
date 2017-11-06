import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Array<Order>;
  constructor() { }

  ngOnInit() {
    this.orders = [
      new Order(123, 'NB', '$50', '11/6/17')
    ];
  }

}
export class Order {
  constructor(
    public orderID: number,
    public rName: string,
    public price: String,
    public date: string,
  ) {
  }
}

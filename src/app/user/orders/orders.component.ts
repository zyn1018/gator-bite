import {Component, OnInit} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  headers: Headers;
  options: any;
  orders = [];

  /**
   * Constuct the headers for Http
   */
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('authentication', localStorage.getItem('token'));
    this.options = new RequestOptions({headers: this.headers});
  }

  /**
   * Send the Http get to get order data from database and show it on website
   */
  ngOnInit() {
    this.http.get('/api/getUserOrder', this.options).subscribe(data => {
      for (let i = 0; i < data.json().length; i++) {
        let item = data.json()[i];
        let orderD = item.order;
        let orderDt = '';
        for (let j = 0; j < orderD.length; j++) {
          let str = orderD[j]['name'] + '(' + orderD[j]['number'] + ')';
          orderDt += str + ',';
        }
        let order = new Order(item._id, item.restaurantName, item.price, orderDt.substring(0, orderDt.length - 1), item.orderDate);
        this.orders.push(order);
      }
    });
  }
}

/**
 * Construct the order class
 */
export class Order {
  constructor(public orderID: number,
              public rName: string,
              public price: String,
              public orderDetail: string,
              public date: string,) {
  }
}

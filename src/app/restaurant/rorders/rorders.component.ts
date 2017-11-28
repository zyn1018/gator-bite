import {Component, OnInit} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-rorders',
  templateUrl: './rorders.component.html',
  styleUrls: ['./rorders.component.css']
})
export class RordersComponent implements OnInit {
  headers: Headers;
  options: any;
  orders = [];

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('authentication', localStorage.getItem('token'));
    this.options = new RequestOptions({headers: this.headers});

  }

  ngOnInit() {
    this.http.get('/api/getOrder', this.options).subscribe(data => {
      console.log(data.json());
      for (let i = 0; i < data.json().length; i++) {
        let item = data.json()[i];
        let orderD = item.order;
        let orderDt = '';
        for (let j = 0; j < orderD.length; j++) {
          let str = orderD[i]['name'] + '(' + orderD[i]['number'] + ')';
          //console.log(str);
          if (j == orderD.length - 1) {
            orderDt = str;
          } else {
            orderDt = str + ',';
          }
        }
        let order = new Order(item._id, item.username, item.address, orderDt, item.price, item.orderDate);
        this.orders.push(order);
      }
    });
  }

}

export class Order {
  constructor(public orderID: number,
              public username: string,
              public userAddress: string,
              public orderDetail: string,
              public price: number,
              public orderDate: string) {
  }
}

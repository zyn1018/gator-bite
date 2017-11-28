import { Component, OnInit } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
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
    this.http.get('/api/getOrder',this.options).subscribe(data => {
      console.log(data.json());
    });
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

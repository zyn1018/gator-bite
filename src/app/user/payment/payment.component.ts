import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  fb: FormBuilder = new FormBuilder();
  months: Array<string>;
  years: Array<number>;
  headers: Headers;
  options: any;
  payment: Array<any>;
  model: any = {};
  py: any = {};
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('authentication', localStorage.getItem('token'));
    this.options = new RequestOptions({headers: this.headers});
  }

  /**
   * Store all months and years to choose
   */


  ngOnInit() {
    if(JSON.parse(localStorage.getItem('currentUser')).payment != null){
      this.payment = JSON.parse(localStorage.getItem('currentUser')).payment.split(',');
      this.paymentForm = this.fb.group({
        holder:[this.payment[0]],
        n1:[this.payment[1]],
        n2:[this.payment[2]],
        n3:[this.payment[3]],
        n4:[this.payment[4]],
        em:[this.payment[5]],
        ey:[this.payment[6]],
        cvv:[this.payment[7]],
      });
    }else{
      this.paymentForm = this.fb.group({
        holder:[''],
        n1:[''],
        n2:[''],
        n3:[''],
        n4:[''],
        em:[''],
        ey:[''],
        cvv:[''],
      });
    }
    this.months = [
      'January',
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
      2017,
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
  updatePayment(){
    this.model.userId = JSON.parse(localStorage.getItem('currentUser')).userId;
    this.model.username = JSON.parse(localStorage.getItem('currentUser')).username;
    this.model.email = JSON.parse(localStorage.getItem('currentUser')).email;
    this.model.password = JSON.parse(localStorage.getItem('currentUser')).password;
    this.model.loginRole = JSON.parse(localStorage.getItem('currentUser')).loginRole;
    this.model.address = JSON.parse(localStorage.getItem('currentUser')).address;
    this.model.payment = this.py.holder + ',' + this.py.n1 + ',' + this.py.n2 + ',' + this.py.n3 +','+ this.py.n4 + ',' + this.py.em + ',' + this.py.ey + ',' + this.py.cvv;
    this.http.post('/api/userUpdate', this.model, this.options).map((response: Response) => {
      let user = response.json()['user'];
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    });
  }
}

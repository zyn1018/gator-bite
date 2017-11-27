import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  states: Array<string>;
  addressForm: FormGroup;
  fb: FormBuilder = new FormBuilder();
  address: Array<any>;
  model: any = {};
  headers: Headers;
  options: any;
  ad: any = {};
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('authentication', localStorage.getItem('token'));
    this.options = new RequestOptions({headers: this.headers});
  }

  /**
   * Store the abbreviation of all states in US to show
   */


  ngOnInit() {
    if(JSON.parse(localStorage.getItem('currentUser')).address != null){
      this.address = JSON.parse(localStorage.getItem('currentUser')).address.split(',');
      this.addressForm = this.fb.group({
        aLine1:[this.address[0]],
        aLine2:[this.address[1]],
        city:[this.address[2]],
        state:[this.address[3]],
        zip:[this.address[4]],
      });
    }else{
      this.addressForm = this.fb.group({
        aLine1:[''],
        aLine2:[''],
        city:[''],
        state:[''],
        zip:[''],
      });
    }
    this.states = [
      'AL',
      'Ak',
      'AZ',
      'AR',
      'CA',
      'CO',
      'CT',
      'DE',
      'GA',
      'HI',
      'ID',
      'IL',
      'IN',
      'IA',
      'KS',
      'KY',
      'LA',
      'ME',
      'MD',
      'MA',
      'MI',
      'MN',
      'MS',
      'MO',
      'MT',
      'NE',
      'NV',
      'NH',
      'NJ',
      'NM',
      'NY',
      'NC',
      'ND',
      'OH',
      'OK',
      'OR',
      'PA',
      'RI',
      'SC',
      'SD',
      'TN',
      'TX',
      'UT',
      'VT',
      'VA',
      'WA',
      'WV',
      'WI',
      'WY'
    ];
  }

  updateAddress(){
    this.model.userId = JSON.parse(localStorage.getItem('currentUser')).userId;
    this.model.username = JSON.parse(localStorage.getItem('currentUser')).username;
    this.model.email = JSON.parse(localStorage.getItem('currentUser')).email;
    this.model.password = JSON.parse(localStorage.getItem('currentUser')).password;
    this.model.loginRole = JSON.parse(localStorage.getItem('currentUser')).loginRole;
    this.model.address = this.ad.aLine1 + ',' + this.ad.aLine2 + ',' + this.ad.city
                        +',' +  this.ad.state + ',' + this.ad.zip;
    console.log(this.model.address);
    this.model.payment = JSON.parse(localStorage.getItem('currentUser')).payment;
    this.http.post('/api/userUpdate', this.model, this.options).map((response: Response) => {
      let user = response.json()['user'];
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    });
  }
}


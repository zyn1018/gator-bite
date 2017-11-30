import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
@Component({
  selector: 'app-raddress',
  templateUrl: './raddress.component.html',
  styleUrls: ['./raddress.component.css']
})
export class RaddressComponent implements OnInit {
  states: Array<string>;
  addressForm: FormGroup;
  fb: FormBuilder = new FormBuilder();
  address: Array<any>;
  model: any = {};
  headers: Headers;
  options: any;
  ad: any = {};

  /**
   * Construct the headers for Http
   */

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('authentication', localStorage.getItem('token'));
    this.options = new RequestOptions({headers: this.headers});
  }

  /**
   * Create the addressForm, if the user already updated his address, it will show the user's address.
   * If not, it will show a page for user to update his address and send it the server.
   */
  ngOnInit() {
    this.addressForm = this.fb.group({
      aLine1: [''],
      aLine2: [''],
      city: [''],
      state: [''],
      zip: [''],
    });
    if (JSON.parse(localStorage.getItem('currentUser')).address != null) {
      this.address = JSON.parse(localStorage.getItem('currentUser')).address.split(',');
      //console.log(this.address);
      this.addressForm.controls['aLine1'].setValue(this.address[0]);
      this.ad.aLine1 = this.address[0];
      this.addressForm.controls['aLine2'].setValue(this.address[1]);
      this.ad.aLine2 = this.address[1];
      this.addressForm.controls['city'].setValue(this.address[2]);
      this.ad.city = this.address[2];
      this.addressForm.controls['state'].setValue(this.address[3]);
      this.ad.state = this.address[3];
      this.addressForm.controls['zip'].setValue(this.address[4]);
      this.ad.zip = this.address[4];
    }

    /**
     * Initial all the states in USA for user to choose
     */


    this.states = [
      'AL',
      'Ak',
      'AZ',
      'AR',
      'CA',
      'CO',
      'CT',
      'DE',
      'FL',
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

  /**
   * Update the restaurant's address and send it to the server and then get the response and store it in the localStorage
   */

  updateAddress() {
    this.model.delivery_fee = JSON.parse(localStorage.getItem('currentUser')).delivery_fee;
    this.model.userid = JSON.parse(localStorage.getItem('currentUser'))._id;
    this.model.email = JSON.parse(localStorage.getItem('currentUser')).email;
    this.model.menu = JSON.parse(localStorage.getItem('currentUser')).menu;
    this.model.username = JSON.parse(localStorage.getItem('currentUser')).username;
    this.model.picture = JSON.parse(localStorage.getItem('currentUser')).picture;
    this.model.type = JSON.parse(localStorage.getItem('currentUser')).type;
    this.model.address = this.ad.aLine1 + ',' + this.ad.aLine2 + ',' + this.ad.city
      + ',' + this.ad.state + ',' + this.ad.zip;
    this.http.post('/api/restUpdate', this.model, this.options).map((response: Response) => {
      let user = response.json();
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    }).subscribe(data => {
      this.address = JSON.parse(localStorage.getItem('currentUser')).address;
    });

  }
}

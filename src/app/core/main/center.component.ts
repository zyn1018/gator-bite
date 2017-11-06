import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  dataSource: Observable<any>;
  locationInfo: any;
  str: any;
  constructor(public http: Http) {
  }
  ngOnInit() {
  }
  location() {
    this.getLocation();
    console.log(this.str);
    //this.getInfor();
    //console.log(this.locationInfo);
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPostion.bind(this), this.showError.bind(this));
    }
  }
  showPostion (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    this.str = String(latitude + ',' + longitude);
    //console.log(this.str);
  }
  showError() {
    console.log('Invalid Address !');
  }
  getInfor= () => {
    this.dataSource = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?'
      + 'latlng=' + this.str + '&key=AIzaSyC2wdo6kMAXpuhwuUa8fM4mCkDy_kZeWKY').map(Response => Response.json());
    this.dataSource.subscribe(
      data => this.locationInfo = data
    );
  }
}

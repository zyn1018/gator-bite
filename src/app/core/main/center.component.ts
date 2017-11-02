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
    this.dataSource = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?'
      + 'latlng=' + this.str + '&key=AIzaSyC2wdo6kMAXpuhwuUa8fM4mCkDy_kZeWKY').map(Response => Response.json());
  }
  ngOnInit() {
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPostion, this.showError);
    }
  }
  showPostion(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    this.str.bind(this);
    this.str = String(latitude + ',' + longitude);
    console.log(this.str);
  }
  showError() {
    console.log('Invalid Address !');
  }
  getData() {
    this.dataSource.subscribe(
      data => this.locationInfo = data
    );
    console.log(this.locationInfo);
  }
}

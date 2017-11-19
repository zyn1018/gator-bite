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
  public str: any;
  constructor(public http: Http) {
  }
  ngOnInit() {
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this), this.showErrorPosition.bind(this));
    }
  }
  showPosition (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    this.str = String(latitude + ',' + longitude);
    this.dataSource = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?'
      + 'latlng=' + this.str + '&key=AIzaSyAegO1Uc4FHEPJlCtuHUuW4XdgwWyUyIqo').map(Response => Response.json());
    this.dataSource.subscribe(
      data => this.locationInfo = data
    );
    console.log(this.locationInfo);
    // const obj = JSON.parse(this.locationInfo);
    // console.log(obj[0].formatAddress);
  }
  showErrorPosition() {
    console.log('Invalid Address !');
  }
}

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
  a: any;
  constructor(public http: Http) {
    this.dataSource = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?'
      + 'latlng=29.6477898,-82.3438111&key=AIzaSyC2wdo6kMAXpuhwuUa8fM4mCkDy_kZeWKY').map(Response => Response.json());
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
    const s  = String(latitude + ',' + longitude);
    console.log(s);
  }
  showError() {
    console.log('Invalid Address !');
  }
  getData() {
    this.dataSource.subscribe(
      data => this.a = data
    );
    console.log(this.a);
  }
}

import {Component, OnInit} from '@angular/core';
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
  obj = '';
  process: boolean;

  constructor(public http: Http) {
  }

  ngOnInit() {
  }
  /**
   * Get user's current location and then show the address of user's location
   */
  getLocation() {
    if (navigator.geolocation) {
      this.process = true;
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this), this.showErrorPosition.bind(this));
      setTimeout(() => {
        this.obj = this.locationInfo['results'][0]['formatted_address'];
        this.process = false;
      }, 6000);
    }
  }


  /**
   * When user has a location, use this function to get the latitude and longitude of user location
   * and then send it to GoogleMap API to get the address name and city name.
   */


  showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    this.str = String(latitude + ',' + longitude);
    this.dataSource = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?'
      + 'latlng=' + this.str + '&key=AIzaSyAegO1Uc4FHEPJlCtuHUuW4XdgwWyUyIqo').map(Response => Response.json());
    this.dataSource.subscribe(
      data => this.locationInfo = data
    );
    // const obj = JSON.parse(this.locationInfo);
    // console.log(obj.result[0].formatAddress);
  }


  /**
   * If get location goes wrong, log 'Invalid Address'
   */


  showErrorPosition() {
    console.log('Invalid Address !');
  }
}

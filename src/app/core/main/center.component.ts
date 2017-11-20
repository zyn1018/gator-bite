import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  dataSource: Observable<any>;
  public locationInfo: any;
  public str: any = '';

  constructor(public http: Http, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this), this.showErrorPosition.bind(this));
    }
  }

  showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    this.str = String(latitude + ',' + longitude);
    this.dataSource = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?'
      + 'latlng=' + this.str + '&key=AIzaSyAegO1Uc4FHEPJlCtuHUuW4XdgwWyUyIqo').map(Response => Response.json());
    this.dataSource.subscribe(
      data => {
        this.locationInfo = data;
        this.cdr.markForCheck();
        this.cdr.detectChanges();
      }
    );

  }

  showErrorPosition() {
    console.log('Invalid Address !');
  }
}

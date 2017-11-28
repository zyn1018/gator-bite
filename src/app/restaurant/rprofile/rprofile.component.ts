import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rprofile',
  templateUrl: './rprofile.component.html',
  styleUrls: ['./rprofile.component.css']
})
export class RprofileComponent implements OnInit {
  imageUrl: string;
  restaurantName: string;
  restaurantType: string;
  delivery: string;

  constructor() {
  }

  ngOnInit() {
    this.imageUrl = JSON.parse(localStorage.getItem('currentUser')).picture;
    console.log(JSON.parse(localStorage.getItem('currentUser')));
    this.restaurantName = JSON.parse(localStorage.getItem('currentUser')).username;
    this.restaurantType = JSON.parse(localStorage.getItem('currentUser')).type;
    this.delivery = '$' + JSON.parse(localStorage.getItem('currentUser')).delivery_fee;

  }

}

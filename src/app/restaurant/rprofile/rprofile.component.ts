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


  /**
   * Get the restaurant's photo, name, type and delivery fee from database and show it on the website
   */


  ngOnInit() {
    this.imageUrl = JSON.parse(localStorage.getItem('currentUser')).picture;
    this.restaurantName = JSON.parse(localStorage.getItem('currentUser')).username;
    this.restaurantType = JSON.parse(localStorage.getItem('currentUser')).type;
    this.delivery = '$' + JSON.parse(localStorage.getItem('currentUser')).delivery_fee;

  }

}

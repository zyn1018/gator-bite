import {Component, OnInit} from '@angular/core';
import {Restaurant} from './restaurant';
import {RestaurantService} from './restaurant.service';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'app-restaurants',
  styleUrls: ['restaurants.component.css'],
  templateUrl: 'restaurants.component.html',
})

export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];
  getRestaurants(): void {
    this.restaurantService.getRestaurants().then(res => this.restaurants = res);
  }
  ngOnInit(): void {
    this.getRestaurants();
  }
  constructor(private restaurantService: RestaurantService) {}
}

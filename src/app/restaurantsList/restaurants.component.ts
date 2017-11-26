import {Component, OnInit} from '@angular/core';
import {Restaurant} from './restaurant';
import {RestaurantService} from './restaurant.service';
import {Router} from '@angular/router';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'app-restaurants',
  styleUrls: ['restaurants.component.css'],
  templateUrl: 'restaurants.component.html',
})

export class RestaurantsComponent implements OnInit {
  public restaurants: Restaurant[];

  getRestaurants() {
    this.restaurantService.getRestaurantsDB();
    this.restaurants = this.restaurantService.restaurants;
    console.log(this.restaurantService.restaurants);
  }

  ngOnInit() {
    this.getRestaurants();
    // console.log(this.restaurants);
  }

  constructor(private restaurantService: RestaurantService, private router: Router) {
  }

  /**
   * Navigate to restaurant menu
   * @param {Restaurant} res
   */
  goToMenu(res: Restaurant) {
    this.router.navigateByUrl('/restaurants/' + res.restaurantId);
  }
}

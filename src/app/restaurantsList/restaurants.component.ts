import {Component, OnInit} from '@angular/core';
import {Restaurant} from './restaurant';
import {RestaurantService} from './restaurant.service';
import {Router} from '@angular/router';
import {Headers, Http, RequestOptions} from '@angular/http';

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
  public headers: Headers;
  public options: RequestOptions;
  // getRestaurants() {
  //   this.restaurantService.getRestaurantsDB();
  //   this.restaurants = this.restaurantService.restaurants;
  //   console.log(this.restaurantService.restaurants);
  // }

  ngOnInit() {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('authentication', localStorage.getItem('token'));
    this.options = new RequestOptions({headers: this.headers});
    this.restaurants = [];
    /**
     * To get available restaurants nearby
     */
    this.http.get('/api/restaurant', this.options).subscribe(data => {
      // console.log(data.json());
      for (let i = 0; i < data.json().length; i++) {
        let item = data.json()[i];
        let restaurantItem = new Restaurant(item._id, item.picture, item.username, item.type, item.delivery_fee);
        this.restaurants.push(restaurantItem);
      }
    });
  }

  constructor(private restaurantService: RestaurantService, private router: Router, private http: Http) {
  }

  /**
   * Navigate to restaurant menu
   * @param {Restaurant} res
   */
  goToMenu(res: Restaurant) {
    this.router.navigateByUrl('/restaurants/' + res.restaurantId);
  }
}

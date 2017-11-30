import {Component, OnInit} from '@angular/core';
import {Restaurant} from './restaurant';
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
      for (let i = 0; i < data.json().length; i++) {
        let item = data.json()[i];
        let restaurantItem = new Restaurant(item._id, item.picture, item.username, item.type, item.delivery_fee);
        this.restaurants.push(restaurantItem);
      }
    });
  }

  constructor(private router: Router, private http: Http) {
  }

  /**
   * Navigate to one restaurant menu
   * @param {Restaurant} res
   */
  goToMenu(res: Restaurant) {
    this.router.navigateByUrl('/restaurants/' + res.restaurantId);
  }
}

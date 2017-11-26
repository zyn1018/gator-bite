import {Injectable} from '@angular/core';
import {Restaurant} from './restaurant';
import {Restaurants} from './mock-restaurants';
import {Http} from '@angular/http';

@Injectable()
export class RestaurantService {
  public restaurants: Restaurant[];

  constructor(private http: Http) {
  }

  //
  // getRestaurants(): Promise<Restaurant[]> {
  //   return Promise.resolve(Restaurants);
  // }
  //
  // getRestaurantsDB() {
  //   this.http.get('/api/restaurant').subscribe(data => {
  //     // console.log(data.json());
  //     localStorage.setItem('restaurantList', JSON.stringify(data.json()));
  //   });
}


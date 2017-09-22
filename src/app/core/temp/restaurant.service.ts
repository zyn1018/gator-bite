import {Injectable} from '@angular/core';
import {Restaurant} from './restaurant';
import {Restaurants} from './mock-restaurants';

@Injectable()
export class RestaurantService {
  getRestaurants(): Promise<Restaurant[]> {
    return Promise.resolve(Restaurants);
  }
}

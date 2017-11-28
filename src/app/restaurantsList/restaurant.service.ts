import {Injectable} from '@angular/core';
import {Restaurant} from './restaurant';
import {Http} from '@angular/http';

@Injectable()
export class RestaurantService {
  public restaurants: Restaurant[];

  constructor(private http: Http) {
  }
}


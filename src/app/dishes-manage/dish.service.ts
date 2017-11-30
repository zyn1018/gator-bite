import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class DishService {
  public headers: Headers;
  public options: RequestOptions;
  public dishes: Dish[] = [];
  public email: string;
  public restaurantId: string;

  constructor(private http: Http) {
  }

  /**
   * Get restaurant menu for management
   * @returns {Dish[]}
   */
  getDishes(): Dish[] {
    this.dishes = JSON.parse(localStorage.getItem('currentUser')).menu;
    return this.dishes;
  }

  /**
   * Get menu for order
   * @param {string} restaurantId
   * @returns {Observable<Dish[]>}
   */
  getOneResDish(restaurantId: string): Observable<any> {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('authentication', localStorage.getItem('token'));
    this.options = new RequestOptions({headers: this.headers});
    return this.http.get('/api/dishes/' + restaurantId, this.options).map(res => res.json());
  }

  /**
   * Get one dish based on dishId
   * @param {number} id
   * @returns {Dish}
   */
  getDish(id: number): Dish {
    let dish = this.dishes.find(dish => dish.dishId == id);
    if (dish == null) {
      dish = new Dish(0, '', null, '');
    }
    return dish;
  }

  /**
   * Update restaurant menu
   * @param {Dish} dish
   */
  updateDishesDB(dish: Dish) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('authentication', localStorage.getItem('token'));
    this.options = new RequestOptions({headers: this.headers});
    if (dish.dishId == 0) {
      dish.dishId = this.dishes.length + 1;
      this.dishes.push(dish);
      this.dishes.sort((d1, d2) => d1.dishId - d2.dishId);
      this.http.post('/api/restMenuUpdate', this.dishes, this.options).map((response: Response) => response.json()
      ).subscribe(data => {
      });
      let user = JSON.parse(localStorage.getItem('currentUser'));
      user.menu = this.dishes;
      localStorage.setItem('currentUser', JSON.stringify(user));

    } else {
      this.dishes.splice(dish.dishId - 1, 1, dish);
      this.http.post('/api/restMenuUpdate', this.dishes, this.options).map((response: Response) =>
        response.json()
      ).subscribe(data => {
      });
      let user = JSON.parse(localStorage.getItem('currentUser'));
      user.menu = this.dishes;
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  }
}

export class Dish {
  constructor(public dishId: number,
              public name: string,
              public price: number,
              public desc: string) {
  }
}

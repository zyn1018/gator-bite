import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class DishService {
  public menu: Dish[];
  public headers: Headers;
  public options: RequestOptions;
  public dishes: Dish[] = [];
  public email: string;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('authentication', localStorage.getItem('token'));
    this.options = new RequestOptions({headers: this.headers});
  }

  /**
   * Get all the dishes
   * @returns {Dish[]}
   */
  getDishes() {
    return this.dishes;
  }

  /**
   * Get all the dishes in menu via database
   */
  getDishesDB(): Dish[] {
    this.email = JSON.parse(localStorage.getItem('currentUser')).email;
    if (JSON.parse(localStorage.getItem('currentUser')).menu == null) {
      this.menu = [];
    } else {
      this.menu = JSON.parse(localStorage.getItem('currentUser')).menu;
    }
    // return this.http.get('/api/dishes/' + this.email).map(res =>
    //   res.json()
    // );
    this.dishes = this.menu;
    return this.dishes;
  }

  getOneResDish(restaurantId: string): Observable<Dish[]> {
    return this.http.get('/api/dishes/' + restaurantId, this.options).map(res => res.json());
  }

  /**
   * Get one dish based on dishId
   * @param {number} id
   * @returns {Dish}
   */
  getDish(id: number): Dish {
    let dish = this.menu.find(dish => dish.dishId == id);
    if (dish == null) {
      dish = new Dish(0, '', null, '');
    }
    return dish;
  }

  /**
   * Update dishes manage page
   * @param {Dish} dish
   */
  updateDishes(dish: Dish) {
    if (dish.dishId == 0) {
      dish.dishId = this.dishes.length + 1;
      this.dishes.push(dish);
      this.dishes.sort((d1, d2) => d1.dishId - d2.dishId);
    } else {
      this.dishes.splice(dish.dishId - 1, 1, dish);
    }
  }

  /**
   * Update restaurant menu
   * @param {Dish} dish
   */
  updateDishesDB(dish: Dish) {
    if (dish.dishId == 0) {
      dish.dishId = this.dishes.length + 1;
      console.log(dish.dishId);
      this.dishes.push(dish);
      this.dishes.sort((d1, d2) => d1.dishId - d2.dishId);
      // console.log(this.menu);
      console.log(this.dishes);
      this.http.post('/api/restMenuUpdate', this.dishes, this.options).map((response: Response) => {
        // update successful if there's a restaurant token in the response
        let restaurant = response.json();
        localStorage.setItem('currentUser', JSON.stringify(restaurant));
        this.menu = restaurant['menu'];
      }).subscribe(data => {
        console.log('received response');
      });
      // console.log('sent update request');
    } else {
      this.dishes.splice(dish.dishId - 1, 1, dish);
      console.log(this.dishes);
      this.http.post('/api/restMenuUpdate', this.dishes, this.options).map((response: Response) => {
        // update successful if there's a restaurant token in the response
        let restaurant = response.json();
        localStorage.setItem('currentUser', JSON.stringify(restaurant));
        this.menu = restaurant['menu'];
      }).subscribe(data => {
        console.log('received response');
      });
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

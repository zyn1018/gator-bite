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


  // public dishes: Dish[] = [
  //   new Dish(1, '10 Boneless Wings', 8.99, '10 boneless wings with multiple flavors'),
  //   new Dish(2, '16 Boneless Wings', 13.99, '16 boneless wings with multiple flavors'),
  //   new Dish(3, '20 Boneless Wings', 16.99, '20 boneless wings with multiple flavors'),
  //   new Dish(4, 'Wedge Fries', 2.29, 'Crispy fires'),
  //   new Dish(5, '4 tenders', 5.79, '4 Juicy chicken tenders'),
  //   new Dish(6, '6 tenders', 7.79, '6 Juicy chicken tenders'),
  //   new Dish(7, '10 tenders', 12.79, '10 Juicy chicken tenders'),
  // ];

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
    this.menu = JSON.parse(localStorage.getItem('currentUser')).menu;
    // return this.http.get('/api/dishes/' + this.email).map(res =>
    //   res.json()
    // );
    this.dishes = this.menu;
    return this.menu;
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
   * Update menu in both front-end and back-end
   * @param {Dish} dish
   */
  updateDishesDB(dish: Dish) {
    if (dish.dishId == 0) {
      dish.dishId = this.dishes.length + 1;
      this.dishes.push(dish);
      this.dishes.sort((d1, d2) => d1.dishId - d2.dishId);
      // console.log(this.menu);
      console.log(this.dishes);
      this.http.post('/api/restUpdate', this.dishes, this.options).map((response: Response) => {
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
      this.http.post('/api/restUpdate', this.dishes, this.options).map((response: Response) => {
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

import {Injectable} from '@angular/core';

@Injectable()
export class DishService {

  constructor() {
  }

  public dishes: Dish[] = [
    new Dish(1, '10 Boneless Wings', 8.99, '10 boneless wings with multiple flavors'),
    new Dish(2, '16 Boneless Wings', 13.99, '16 boneless wings with multiple flavors'),
    new Dish(3, '20 Boneless Wings', 16.99, '20 boneless wings with multiple flavors'),
    new Dish(4, 'Wedge Fries', 2.29, 'Crispy fires'),
    new Dish(5, '4 tenders', 5.79, '4 Juicy chicken tenders'),
    new Dish(6, '6 tenders', 7.79, '6 Juicy chicken tenders'),
    new Dish(7, '10 tenders', 12.79, '10 Juicy chicken tenders'),
  ];

  getDishes() {
    return this.dishes;
  }

}

export class Dish {
  constructor(public id: number,
              public name: string,
              public price: number,
              public desc: string) {
  }


}

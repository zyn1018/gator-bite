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

  getDish(id: number): Dish {
    let dish = this.dishes.find(dish => dish.id == id);
    if (dish == null) {
      dish = new Dish(0, '', null, '');
    }
    return dish;
  }

  updateDishes(dish: Dish) {
    if (dish.id == 0) {
      dish.id = this.dishes.length + 1;
      this.dishes.push(dish);
      this.dishes.sort((d1, d2) => d1.id - d2.id);
    } else {
      this.dishes.splice(dish.id - 1, 1, dish);
    }
  }
}

export class Dish {
  constructor(public id: number,
              public name: string,
              public price: number,
              public desc: string) {
  }


}

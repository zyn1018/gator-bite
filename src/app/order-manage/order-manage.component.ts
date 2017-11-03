import {Component, OnInit} from '@angular/core';
import {Dish, DishService} from '../dishes-manage/dish.service';

@Component({
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrls: ['./order-manage.component.css']
})
export class OrderManageComponent implements OnInit {
  public dishes: Dish[];
  public selectedDishes: Dish[] = [];
  constructor(private dishService: DishService) {
  }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  addToOrder(dish: Dish) {
    this.selectedDishes.push(dish);
  }

}

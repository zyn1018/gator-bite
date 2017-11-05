import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Dish, DishService} from '../dishes-manage/dish.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrls: ['./order-manage.component.css']
})
export class OrderManageComponent implements OnInit {
  public dishes: Dish[];
  public orderDetail = new Map<string, number[]>();
  public show: boolean = false;
  public totalPrice: number = 0;
  public tax: number = 0;

  constructor(private dishService: DishService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  checkShowParam() {
    if (this.orderDetail.size == 0) {
      this.show = false;
    } else if (this.orderDetail.size > 0) {
      this.show = true;
    }
  }

  calTotalPrice() {
    this.totalPrice = 0;
    this.orderDetail.forEach((value, key) => {
      this.totalPrice += value[0] * value[1];
    });
  }

  calTax() {
    this.tax = this.totalPrice * 0.06;
  }

  addToOrder(dish: Dish) {
    if (this.orderDetail.get(dish.name) == null) {
      this.orderDetail.set(dish.name, [1, dish.price]);
    } else {
      let oldCount = this.orderDetail.get(dish.name)[0];
      this.orderDetail.set(dish.name, [oldCount + 1, dish.price]);
    }
    this.checkShowParam();
    this.calTotalPrice();
    this.calTax();
  }

  removeDish(dishName: string) {
    if (confirm('Remove ' + dishName + ' from your bag?')) {
      this.orderDetail.delete(dishName);
    }
    this.checkShowParam();
    this.calTotalPrice();
    this.calTax();
  }

  addDishCount(dishName: string) {
    let value = this.orderDetail.get(dishName);
    this.orderDetail.set(dishName, [value[0] + 1, value[1]]);
    this.checkShowParam();
    this.calTotalPrice();
    this.calTax();
  }

  minusDishCount(dishName: string) {
    let value = this.orderDetail.get(dishName);
    if (value[0] == 1) {
      this.orderDetail.delete(dishName);
    } else {
      this.orderDetail.set(dishName, [value[0] - 1, value[1]]);
    }
    this.checkShowParam();
    this.calTotalPrice();
    this.calTax();
  }
}


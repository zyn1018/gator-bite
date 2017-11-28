import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {Dish, DishService} from '../../dishes-manage/dish.service';
import {OrderService} from '../order.service';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/common';


@Component({
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrls: ['./order-manage.component.css']
})
export class OrderManageComponent implements OnInit {
  public dishes: Dish[];
  public restaurantId: string;
  public orderDetail = new Map<string, number[]>();

  constructor(@Inject(DOCUMENT) private document: Document, private dishService: DishService, private orderService: OrderService, private cdr: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit() {
    this.restaurantId = this.document.location.href.split('/')[4];
    this.dishService.getOneResDish(this.restaurantId).subscribe(
      data => {
        // console.log(data);
        this.dishes = data['menu'];
      }
    );
    this.orderService.setRestaurantIdSubject(this.restaurantId);
  }

  /**
   * Add dish to order
   * @param {Dish} dish
   */
  addToOrder(dish: Dish) {
    if (this.orderDetail.get(dish.name) == null) {
      this.orderDetail.set(dish.name, [1, dish.price]);
    } else {
      let oldCount = this.orderDetail.get(dish.name)[0];
      this.orderDetail.set(dish.name, [oldCount + 1, dish.price]);
    }
    this.orderService.setOrderDetailSubject(this.orderDetail);
  }

  /**
   * Navigate back to restaurant list page
   */
  navigateBack() {
    this.router.navigateByUrl('/restaurants');
  }
}


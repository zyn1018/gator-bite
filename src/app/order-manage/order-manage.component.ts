import {Component, OnInit} from '@angular/core';
import {DishService} from '../dishes-manage/dish.service';

@Component({
  selector: 'app-order-manage',
  templateUrl: './order-manage.component.html',
  styleUrls: ['./order-manage.component.css']
})
export class OrderManageComponent implements OnInit {

  constructor(private dishService: DishService) {
  }

  ngOnInit() {
    const dishes = this.dishService.getDishes();
  }

}

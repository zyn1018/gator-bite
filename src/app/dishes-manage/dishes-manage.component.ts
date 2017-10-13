import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Dish, DishService} from './dish.service';

@Component({
  selector: 'app-dishes-manage',
  templateUrl: './dishes-manage.component.html',
  styleUrls: ['./dishes-manage.component.css']
})
export class DishesManageComponent implements OnInit {
  public dishes: Dish[];

  constructor(private router: Router, private dishService: DishService) {
  }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  update() {

  }

  create() {
  }

}


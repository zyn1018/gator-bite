import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Dish, DishService} from './dish.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';
import {UserService} from '../domain/user.service';

@Component({
  selector: 'app-dishes-manage',
  templateUrl: './dishes-manage.component.html',
  styleUrls: ['./dishes-manage.component.css']
})
export class DishesManageComponent implements OnInit {
  public dishes: Dish[];
  public userEmail: string;
  public nameFilter: FormControl = new FormControl();
  public keyword: string;

  constructor(private router: Router, private dishService: DishService, private userService: UserService) {
  }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
    this.nameFilter.valueChanges.debounceTime(500).subscribe(value => this.keyword = value);
    this.userEmail = this.userService.getUser().email;
  }

  /**
   * Create new dish
   */
  create() {
    this.router.navigateByUrl('/dishes/' + this.userEmail + '/0');
  }

  /**
   * Update existing dish
   * @param {Dish} dish
   */
  update(dish: Dish) {
    this.router.navigateByUrl('/dishes/' + this.userEmail + '/' + dish.dishId);
  }

  /**
   * Delete dish that is no longer provided
   * @param {Dish} dish
   */
  delete(dish: Dish) {
    if (confirm('Are you sure to delete ' + dish.name + '?')) {
      this.dishes.splice(dish.dishId - 1, 1);
      for (let i = dish.dishId - 1; i < this.dishes.length; i++) {
        this.dishes[i].dishId -= 1;
      }
      this.router.navigateByUrl('/dishes/' + this.userEmail);
    }
  }
}


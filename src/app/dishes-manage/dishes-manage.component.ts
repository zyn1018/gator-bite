import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Dish, DishService} from './dish.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-dishes-manage',
  templateUrl: './dishes-manage.component.html',
  styleUrls: ['./dishes-manage.component.css']
})
export class DishesManageComponent implements OnInit {
  public dishes: Dish[];
  public nameFilter: FormControl = new FormControl();
  private keyword: string;

  constructor(private router: Router, private dishService: DishService) {
  }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
    this.nameFilter.valueChanges.debounceTime(500).subscribe(value => this.keyword = value);
  }

  create() {
    this.router.navigateByUrl('/dishes/0');
  }

  update(dish: Dish) {
    this.router.navigateByUrl('/dishes/' + dish.id);
  }

  delete(dish: Dish) {
    this.dishes.splice(dish.id - 1, 1);
    for (let i = dish.id - 1; i < this.dishes.length; i++) {
      this.dishes[i].id -= 1;
    }
    this.router.navigateByUrl('/dishes');
  }

}


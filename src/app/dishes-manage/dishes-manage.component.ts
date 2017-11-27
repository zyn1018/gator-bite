import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Dish, DishService} from './dish.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';
import {UserService} from '../domain/user.service';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

@Component({
  selector: 'app-dishes-manage',
  templateUrl: './dishes-manage.component.html',
  styleUrls: ['./dishes-manage.component.css']
})
export class DishesManageComponent implements OnInit {
  public dishes: Dish[];
  public nameFilter: FormControl = new FormControl();
  public keyword: string;
  public userId: string;
  public headers: Headers;
  public options: RequestOptions;

  constructor(private router: Router, private dishService: DishService, private userService: UserService, private http: Http) {
  }

  ngOnInit() {
    this.dishes = this.dishService.getDishesDB();
    this.nameFilter.valueChanges.debounceTime(500).subscribe(value => this.keyword = value);
    this.userId = JSON.parse(localStorage.getItem('currentUser'))._id;
    // console.log(JSON.parse(localStorage.getItem('currentUser')).menu);
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('authentication', localStorage.getItem('token'));
    this.options = new RequestOptions({headers: this.headers});
  }

  /**
   * Create new dish
   */
  create() {
    this.router.navigateByUrl('/dishes/' + this.userId + '/0');
  }

  /**
   * Update existing dish
   * @param {Dish} dish
   */
  update(dish: Dish) {
    this.router.navigateByUrl('/dishes/' + this.userId + '/' + dish.dishId);
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
      this.http.post('/api/resUpdate', this.dishes, this.options).map((response: Response) => {
        // update successful if there's a restaurant token in the response
        let restaurant = response.json()['restaurant'];
        localStorage.setItem('currentUser', JSON.stringify(restaurant));
      }).subscribe(data => {
        console.log('delete successful');
      });
      this.router.navigateByUrl('/dishes/' + this.userId);
    }
  }
}


import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Dish, DishService} from '../dishes-manage/dish.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.css']
})
export class DishFormComponent implements OnInit {

  formModel: FormGroup;
  dish: Dish;
  userId: string;

  constructor(private routeInfo: ActivatedRoute,
              private dishService: DishService,
              private router: Router) {
  }

  ngOnInit() {
    const dishId = this.routeInfo.snapshot.params['dishId'];
    this.dish = this.dishService.getDish(dishId);
    console.log(this.dish);
    this.userId = JSON.parse(localStorage.getItem('currentUser'))._id;
    let fb = new FormBuilder();
    this.formModel = fb.group(
      {
        name: [this.dish.name, [Validators.required]],
        price: [this.dish.price, [Validators.required]],
        desc: [this.dish.desc]
      }
    );
  }

  //Discard change and go back to dishes manage page
  cancel() {
    this.router.navigateByUrl('/dishes/' + this.userId);
  }

  //Save the dish details after update
  save() {
    this.dish.name = this.formModel.get('name').value;
    this.dish.price = this.formModel.get('price').value;
    this.dish.desc = this.formModel.get('desc').value;
    this.dishService.updateDishesDB(this.dish);
    this.router.navigateByUrl('/dishes/' + this.userId);
  }
}

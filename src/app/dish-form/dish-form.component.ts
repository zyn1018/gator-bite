import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DishService} from '../dishes-manage/dish.service';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.css']
})
export class DishFormComponent implements OnInit {

  constructor(private routeInfo: ActivatedRoute, private dishService: DishService, private router: Router) {
  }

  ngOnInit() {
  }

  cancel() {
    this.router.navigateByUrl('/dishes');
  }

  save() {

  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../domain/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  menus: Array<Menu>;
  public userId: number;

  constructor(public router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.userId = this.userService.getUser().userId;
    this.menus = [
      new Menu(1, 'profile', '/user/' + this.userId + '/profile'),
      new Menu(2, 'address', '/user/' + this.userId + '/address'),
      new Menu(3, 'payment', '/user/' + this.userId + '/payment'),
      new Menu(4, 'orders', '/user/' + this.userId + '/orders')
    ];
  }
  nav(menu: Menu) {
    this.router.navigateByUrl(menu.link);
  }
}
export  class Menu {
  constructor(
    public id: number,
    public name: string,
    public link: string
  ) {
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  menus: Array<Menu>;
  constructor(public router: Router) {
  }

  ngOnInit() {
    this.menus = [
      new Menu(1, 'profile', '/user/profile'),
      new Menu(2, 'address', '/user/address'),
      new Menu(3, 'payment', '/user/payment'),
      new Menu(4, 'orders', '/user/orders')
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

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

  /**
   * Navigate to different URL as chosen
   */

  ngOnInit() {
    this.userId = this.userService.getUser().userId;
    this.menus = [
      new Menu(1, 'Profile', '/user/' + this.userId + '/profile'),
      new Menu(2, 'Address', '/user/' + this.userId + '/address'),
      new Menu(3, 'Payment', '/user/' + this.userId + '/payment'),
      new Menu(4, 'Orders', '/user/' + this.userId + '/orders')
    ];
  }

  /**
   * The navigator of the whole page which is to show the specific chosen information
   */
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

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
  public userId: any;

  constructor(public router: Router, private userService: UserService) {
  }

  /**
   * Navigate to different URL as chosen
   */

  ngOnInit() {
    const user: string = localStorage.getItem('currentUser');
    const userInfo: Array<string> = user.split(',');
    this.userId = userInfo[0].substring(15, userInfo[0].length - 1);
    this.menus = [
      new Menu(this.userId, 'Profile', '/user/' + this.userId + '/profile'),
      new Menu(this.userId, 'Address', '/user/' + this.userId + '/address'),
      new Menu(this.userId, 'Payment', '/user/' + this.userId + '/payment'),
      new Menu(this.userId, 'Orders', '/user/' + this.userId + '/orders')
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
  constructor(public id: string,
              public name: string,
              public link: string
  ) {
  }
}

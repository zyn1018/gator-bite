import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User, UserService} from '../../domain/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  menus: Array<Menu>;
  constructor(public router: Router, private userService: UserService) {
  }

  /**
   * Navigate to different URL as chosen
   */

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if(user){
      const userid : string = JSON.parse(localStorage.getItem('currentUser'))._id;
      this.menus = [
        new Menu(userid, 'Profile', '/user/' + userid + '/profile'),
        new Menu(userid, 'Address', '/user/' + userid + '/address'),
        new Menu(userid, 'Payment', '/user/' + userid + '/payment'),
        new Menu(userid, 'Orders', '/user/' + userid + '/orders')
      ];
    }
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
    public id: string,
    public name: string,
    public link: string
  ) {
  }
}

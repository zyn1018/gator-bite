import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User, UserService} from '../../domain/user.service';

@Component({
  selector: 'app-raccount',
  templateUrl: './raccount.component.html',
  styleUrls: ['./raccount.component.css']
})
export class RaccountComponent implements OnInit {
  menus: Array<Menu>;

  constructor(public router: Router, private userService: UserService) {
  }

  /**
   * The router to navigate to other pages
   */

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      const userid: string = JSON.parse(localStorage.getItem('currentUser'))._id;
      this.menus = [
        new Menu(userid, 'Profile', '/restaurantInfo/' + userid + '/restaurantProfile'),
        new Menu(userid, 'Address', '/restaurantInfo/' + userid + '/restaurantAddress'),
        new Menu(userid, 'Orders', '/restaurantInfo/' + userid + '/restaurantOrders')
      ];
    }
  }


  /**
   * Navigate to the page by its URL
   */

  nav(menu: Menu) {
    this.router.navigateByUrl(menu.link);
  }
}


/**
 * The class for Menu which contains menu id, menu name and menu link
 */

export class Menu {
  constructor(public id: string,
              public name: string,
              public link: string) {
  }
}

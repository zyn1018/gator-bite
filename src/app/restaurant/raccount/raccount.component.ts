import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User, UserService} from '../../domain/user.service';
@Component({
  selector: 'app-raccount',
  templateUrl: './raccount.component.html',
  styleUrls: ['./raccount.component.css']
})
export class RaccountComponent implements OnInit {
  menus: Array<Menu>;
  constructor(public router: Router, private userService: UserService) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if(user){
      const userid : string = JSON.parse(localStorage.getItem('currentUser'))._id;
      this.menus = [
        new Menu(userid, 'Profile', '/restaurantInfo/' + userid + '/restaurantProfile'),
        new Menu(userid, 'Address', '/restaurantInfo/' + userid + '/restaurantAddress'),
        new Menu(userid, 'Orders', '/restaurantInfo/' + userid + '/restaurantOrders')
      ];
    }
  }
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

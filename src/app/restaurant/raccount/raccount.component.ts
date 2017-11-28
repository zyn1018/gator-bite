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

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      const userid: string = JSON.parse(localStorage.getItem('currentUser'))._id;
      this.menus = [
        new Menu(userid, 'rProfile', '/restaurant/' + userid + '/rprofile'),
        new Menu(userid, 'rAddress', '/restaurant/' + userid + '/raddress'),
        new Menu(userid, 'rPayment', '/restaurant/' + userid + '/rpayment'),
        new Menu(userid, 'rOrders', '/restaurant/' + userid + '/rorders')
      ];
    }
  }

  nav(menu: Menu) {
    this.router.navigateByUrl(menu.link);
  }
}

export class Menu {
  constructor(public id: string,
              public name: string,
              public link: string) {
  }
}

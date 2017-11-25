import { Component, OnInit } from '@angular/core';
import {User, UserService} from '../../domain/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  /**
   * Hide the password and show * instead
   */

  makePassword(n: number): string {
    let s = '';
    for (let i = 0; i < n; i++) {
      s += '*';
    }
    return s;
  }
}

import { Component, OnInit } from '@angular/core';
import {User, UserService} from '../../domain/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string;
  email: string;
  passwordLength: number;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem('currentUser')).username;
    this.email = JSON.parse(localStorage.getItem('currentUser')).email;
    this.passwordLength = JSON.parse(localStorage.getItem('currentUser')).hash.length;
  }

  /**
   * Hide the password and show * instead
   */

  makePassword(n: number): string {
    let s = '';
    n = n / 8;
    for (let i = 0; i < n; i++) {
      s += '*';
    }
    return s;
  }
}

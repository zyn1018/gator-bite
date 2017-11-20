import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../domain/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userEmail: string;

  private isLogin: boolean = false;

  private isRestaurant: boolean = false;

  form: FormGroup;

  fb: FormBuilder = new FormBuilder();

  emailValidator(email: FormControl): any {
    const value = (email.value || '') + '';
    const myEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    const valid = myEmail.test(value);
    return valid ? null : {email: true};
  }

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', this.emailValidator],
      password: [''],
      loginRole: ['', Validators.required]
    });
    this.userEmail = this.userService.getUser().email;
  }

  /**
   * User login
   */
  login() {
    if (this.form.value.loginRole == 1) {
      this.isLogin = true;
      this.userService.setIsLoginSubject(this.isLogin);
      this.router.navigateByUrl('/restaurants');
    } else if (this.form.value.loginRole == 2) {
      this.isLogin = true;
      this.userService.setIsLoginSubject(this.isLogin);
      this.isRestaurant = true;
      this.userService.setIsRestaurantSubject(this.isRestaurant);
      this.router.navigateByUrl('/dishes/' + this.userEmail);
    }
  }
}

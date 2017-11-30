import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../domain/user.service';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../../utils/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private isLogin: boolean = false;
  private isRestaurant: boolean = false;
  form: FormGroup;
  returnUrl: string;
  model: any = {};
  fb: FormBuilder = new FormBuilder();


  /**
   * The validator to check invalid email address
   */


  emailValidator(email: FormControl): any {
    const value = (email.value || '') + '';
    const myEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    const valid = myEmail.test(value);
    return valid ? null : {email: true};
  }

  constructor(private router: Router,
              private userService: UserService,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService,) {
  }

  /**
   * Create a form which contains email, password and loginRole for users to login to the website
   */
  ngOnInit() {
    this.form = this.fb.group({
      email: ['', this.emailValidator],
      password: [''],
      loginRole: ['', Validators.required]
    });
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  /**
   * User login
   */
  login() {
    /**
     * Customer Login
     */
    if (this.form.value.loginRole == 1) {
      this.authenticationService.loginCustomer(this.model.email, this.model.password).subscribe(
        data => {
          this.isLogin = true;
          this.userService.setIsLoginSubject(this.isLogin);
          this.router.navigate([this.returnUrl]);
          console.log(localStorage.getItem('token'));
        },
        error => {
          console.log(error);
          alert("Invalid customer account");
        }
      )
      /**
       * Restaurant Login
       */
    } else if (this.form.value.loginRole == 2) {
      this.authenticationService.loginRestaurant(this.model.email, this.model.password).subscribe(
        data => {
          this.isLogin = true;
          this.userService.setIsLoginSubject(this.isLogin);
          this.isRestaurant = true;
          this.userService.setIsRestaurantSubject(this.isRestaurant);
          const id = JSON.parse(localStorage.getItem('currentUser'))._id;
          console.log(localStorage.getItem('token'));
          this.router.navigateByUrl('/dishes/' + id);
        },
        error => {
          console.log(error);
          alert("Invalid restaurant account");
        }
      )
    }
  }
}

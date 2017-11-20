import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../domain/user.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  constructor(private router: Router, private userService: UserService, private http: HttpClient) {
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
  login(f: NgForm) {
    console.log(f.form);
    const user = {email: f.form.value.email, password: f.form.value.password};
    if (this.form.value.loginRole == 1) {
      this.isLogin = true;
      this.userService.setIsLoginSubject(this.isLogin);
      const headers = new HttpHeaders({ 'content-type': 'application/json', 'Accept': 'application/json' });
      console.log(user);
      this.http.post('/api/login', JSON.stringify(user), { headers: headers }).subscribe();
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

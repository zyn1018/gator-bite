import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../domain/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  fb: FormBuilder = new FormBuilder();
  model: any = {};

  /**
   * Validator for email
   * @param {FormControl} email
   * @returns {any}
   */
  emailValidator(email: FormControl): any {
    const value = (email.value || '') + '';
    const myEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    const valid = myEmail.test(value);
    return valid ? null : {email: true};
  }

  /**
   * Validator for Password
   * @param {FormGroup} info
   * @returns {any}
   */
  passwordValidator(info: FormGroup): any {
    const password: FormControl = info.get('password') as FormControl;
    const confirmPassword: FormControl = info.get('confirmPassword') as FormControl;
    const valid1: boolean = password.value === confirmPassword.value;
    return valid1 ? null : {password: true};
  }

  constructor(private http: HttpClient, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', this.emailValidator],
      username: ['', [Validators.required, Validators.minLength(6)]],
      passwordInfo: this.fb.group({
        password: [''],
        confirmPassword: ['']
      }, {validator: this.passwordValidator}),
      loginRole: ['', Validators.required]
    });
  }

  /**
   *  User register
   */
  register() {
    this.model.address = '';
    this.model.payment = '';
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
          alert("Register failed");
        });
  }
}

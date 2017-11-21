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

  emailValidator(email: FormControl): any {
    const value = (email.value || '') + '';
    const myEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    const valid = myEmail.test(value);
    console.log('email' + valid);
    return valid ? null : {email: true};
  }

  passwordValidator(info: FormGroup): any {
    const password: FormControl = info.get('password') as FormControl;
    const confirmPassword: FormControl = info.get('confirmPassword') as FormControl;
    const valid1: boolean = (password.value === confirmPassword.value);
    console.log('password is right:' + valid1);
    return valid1 ? null : {password: true};
  }

  constructor(private http: HttpClient, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', this.emailValidator],
      userName: ['', [Validators.required, Validators.minLength(6)]],
      passwordInfo: this.fb.group({
        password: [''],
        confirmPassword: ['']
      }, {validator: this.passwordValidator}),
      loginRole: ['', Validators.required]
    });
  }

  // signUp(f: NgForm) {
  //   console.log(f.value);
  //   const headers = new HttpHeaders({'content-type': 'application/json', 'Accept': 'application/json'});
  //   const user = {email: f.value.email, username: f.value.userName, password: f.value.passwordInfo.password};
  //   console.log(user);
  //   this.http.post('/api/register', JSON.stringify(user), {headers: headers}).subscribe();
  //   console.log(this.signupForm.value);
  //   console.log(f.value.email);
  // }

  register() {
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
        });
  }
}

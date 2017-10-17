import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../domain/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userEmail: string;
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
      password: ['']
    });
    this.userEmail = this.userService.getUser().email;
  }

  login() {
    this.router.navigateByUrl('/dishes/' + this.userEmail);
  }
}

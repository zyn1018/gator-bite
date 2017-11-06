import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  isLogin: boolean = false;

  constructor() {
  }

  users: User[] = [
    new User('wingzone@gmail.com', 'wingzone', 'admin', true)
  ];

  getUser() {
    return this.users[0];
  }

  private isLoginSubject = new Subject<boolean>();

  public setisLoginSubject(isLogin: boolean) {
    this.isLogin = isLogin;
    this.isLoginSubject.next(isLogin);
  }

  public getisLoginSubject(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

}

export class User {
  constructor(public email: string,
              public username: string,
              public password: string,
              public isRestaurant: boolean) {
  }
}

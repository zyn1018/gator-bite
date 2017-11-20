import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  isLogin: boolean = false;

  isRestaurant: boolean = false;

  constructor() {
  }

  users: User[] = [
    new User(1, 'wingzone@gmail.com', 'wingzone', 'admin', true),
    new User(2, 'asd123456@yahoo.com', 'asd1111', '123456', false),
  ];

  /**
   * Get user
   * @returns {User}
   */
  getUser() {
    return this.users[0];
  }

  private isLoginSubject = new Subject<boolean>();

  private isRestaurantSubject = new Subject<boolean>();

  public setIsLoginSubject(isLogin: boolean) {
    this.isLogin = isLogin;
    this.isLoginSubject.next(isLogin);
  }

  public getIsLoginSubject(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  public setIsRestaurantSubject(isRestaurant: boolean) {
    this.isRestaurant = isRestaurant;
    this.isRestaurantSubject.next(isRestaurant);
  }

  public getIsRestaurantSubject(): Observable<boolean> {
    return this.isRestaurantSubject.asObservable();
  }
}

export class User {
  constructor(public userId: number,
              public email: string,
              public username: string,
              public password: string,
              public isRestaurant: boolean) {
  }
}

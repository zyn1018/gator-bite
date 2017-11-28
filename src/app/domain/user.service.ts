import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

@Injectable()
export class UserService {

  isLogin = false;

  isRestaurant = false;

  constructor(private http: Http) {
  }

  /**
   * Fake data for test
   * @type {[User , User]}
   */
  users: User[] = [
    new User(1, 'wingzone@gmail.com', 'wingzone', 'admin', 2, '123', '123'),
    new User(2, 'asd123456@yahoo.com', 'asd1111', '123456', 1,'123', '123'),
  ];

  /**
   * Get user
   * @returns {User}
   */
  getUser() {
    return this.users[0];
  }

  // getAll() {
  //   return this.http.get('/users').map((response: Response) => response.json());
  // }
  //
  // getById(_id: string) {
  //   return this.http.get('/users/' + _id).map((response: Response) => response.json());
  // }

  /**
   * Create new user
   * @param {User} user
   * @returns {Observable<Response>}
   */
  create(user: User) {
    if (user.loginRole === 1) {
      return this.http.post('/api/register', user);
    } else if (user.loginRole === 2) {
      return this.http.post('/api/registerRes', user);
    }
  }

  /**
   * edit existing user
   * @param {User} user
   * @returns {Observable<Response>}
   */
  update(user: User) {
    return this.http.put('/users/' + user.userId, user);
  }

  /**
   * delete user
   * @param {string} _id
   * @returns {Observable<Response>}
   */
  delete(_id: string) {
    return this.http.delete('/users/' + _id);
  }

  // For communication among different components
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

  // public stringToUser(str: string): User {
  //   let strs: Array<string>;
  //   strs = str.split(',');
  // }
}

export class User {
  constructor(public userId: number,
              public email: string,
              public username: string,
              public password: string,
              public loginRole: number,
              public address: string,
              public payment: string) {
  }
}

import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

@Injectable()
export class UserService {

  isLogin: boolean = false;

  isRestaurant: boolean = false;

  constructor(private http: Http) {
  }

  // getAll() {
  //   return this.http.get('/users').map((response: Response) => response.json());
  // }
  //
  // getById(_id: string) {
  //   return this.http.get('/users/' + _id).map((response: Response) => response.json());
  // }

  create(user: User) {
    return this.http.post('/users/register', user);
  }

  update(user: User) {
    return this.http.put('/users/' + user.userId, user);
  }

  delete(_id: string) {
    return this.http.delete('/users/' + _id);
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

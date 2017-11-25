import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {
  }

  /**
   * Login as customer
   * @param {string} email
   * @param {string} password
   * @returns {Observable<any>}
   */
  loginCustomer(email: string, password: string) {
    return this.http.post('/api/login', {email: email, password: password})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json()['user'];
        let token = response.json()['token'];
        if (user && token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('token', JSON.stringify(token));
        }
      });
  }

  /**
   * Login as a restaurant manager
   * @param {string} email
   * @param {string} password
   * @returns {Observable<any>}
   */
  loginRestaurant(email: string, password: string) {
    return this.http.post('/api/loginRes', {email: email, password: password})
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let restaurant = response.json()['restaurant'];
        let token = response.json()['token'];
        if (restaurant && token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(restaurant));
          localStorage.setItem('token', JSON.stringify(token));
          // console.log(JSON.stringify(restaurant));
          // console.log(JSON.stringify(token));
        }
      });
  }

  /**
   * Logout
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }
}

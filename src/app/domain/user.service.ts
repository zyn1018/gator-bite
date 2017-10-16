import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

  constructor() {
  }

  users: User[] = [
    new User('wingzone@gmail.com', 'wingzone', 'admin', true)
  ];

  getUser() {
    return this.users[0];
  }
}

export class User {
  constructor(public email: string,
              public username: string,
              public password: string,
              public ifRestaurant: boolean) {
  }
}

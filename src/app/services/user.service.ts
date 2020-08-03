import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'atul',
        lastName: 'beniwal',
        email: 'atul@gmail.com',
        image: 'http://lorempixel.com/500/500/people/5',
        isActive: true,
        registered: new Date('10/10/2019 12:23:12'),
        hide: true,
      },
      {
        firstName: 'alex',
        lastName: 'hale',
        email: 'alex@gmail.com',

        image: 'http://lorempixel.com/500/500/people/2',
        isActive: false,

        registered: new Date('09/10/2020 11:13:12'),
        hide: true,
      },
      {
        firstName: 'john',
        lastName: 'wick',
        email: 'john@gmail.com',
        image: 'http://lorempixel.com/500/500/people/1',
        isActive: true,

        registered: new Date('01/11/2019 10:23:12'),
        hide: true,
      },
    ];
  }

  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next({ name: 'Atul' });
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}

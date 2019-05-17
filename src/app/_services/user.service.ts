import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private users: User[] = [];
private usersUpdated = new Subject<User[]>();

  constructor(private http: HttpClient) { }

getUsers() {
  this.http
    .get<{ message: string; users: any }>(
      'http://localhost:3000/api/user'
    )
    .pipe(
      map(userData => {
      return userData.users.map(user => {
        return {
          email: user.email
        };
      })
    })
  )

  .subscribe(transformedUsers => {
    this.users = transformedUsers;
    this.usersUpdated.next([...this.users]);
  })
}

getUserUpdateListener() {
  return this.usersUpdated.asObservable();
}

}

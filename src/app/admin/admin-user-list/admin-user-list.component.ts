import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../../_models/user.model';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.scss'],
  providers: [UserService]
})
export class AdminUserListComponent implements OnInit, OnDestroy {

  users: User[] = [];
  private usersSubscription: Subscription;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers();
    this.usersSubscription = this.userService.getUserUpdateListener().subscribe((users: User[]) => {
      this.users = users;
    })
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

}

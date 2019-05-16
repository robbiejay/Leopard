import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-staff-header',
  templateUrl: './staff-header.component.html',
  styleUrls: ['./staff-header.component.scss']
})
export class StaffHeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  this.userIsAuthenticated = this.authService.getIsAuth();
this.authListenerSubs = this.authService
.getAuthStatusListener()
.subscribe(isAuthenticated => {
  this.userIsAuthenticated = isAuthenticated;
});
}

onLogout() {
  this.authService.logout();
}

ngOnDestroy() {
  this.authListenerSubs.unsubscribe();
}
}

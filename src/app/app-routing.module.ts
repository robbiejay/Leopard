import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {StaffComponent } from './staff/staff.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNewPostComponent } from './admin/admin-new-post/admin-new-post.component';
import { AdminPostListComponent } from './admin/admin-post-list/admin-post-list.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

import { StaffWhatsNewComponent } from './staff/staff-whats-new/staff-whats-new.component';
import { StaffInsuranceServicesComponent } from './staff/staff-insurance-services/staff-insurance-services.component';
import { StaffActivitiesComponent } from './staff/staff-activities/staff-activities.component';
import { StaffPayrollComponent } from './staff/staff-payroll/staff-payroll.component';
import { StaffContactComponent } from './staff/staff-contact/staff-contact.component';

import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'staff',
    component: StaffComponent,
    canActivate: [AuthGuard],
    children: [
      {
      path:  'staff-whats-new',
      component:  StaffWhatsNewComponent
      },
      {
      path:  'staff-insurance-services',
      component:  StaffInsuranceServicesComponent
      },
      {
      path:  'staff-activities',
      component:  StaffActivitiesComponent
      },
      {
      path:  'staff-payroll',
      component:  StaffPayrollComponent
      },
      {
      path:  'staff-contact',
      component:  StaffContactComponent
      }
      ]
},
    { path: 'admin', component: AdminComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'signin', component: SignInComponent },
    { path: 'admin-new-post', component: AdminNewPostComponent },
    { path: 'edit/:postId', component: AdminNewPostComponent },
    { path: 'admin-post-list', component: AdminPostListComponent }
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule],
providers: [AuthGuard]
})
export class AppRoutingModule {

}

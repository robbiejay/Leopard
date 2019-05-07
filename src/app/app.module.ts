import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { StaffComponent } from './staff/staff.component';

import { AuthService } from './auth/auth.service';
import { BlogService } from './_services/blog.service';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { StaffNavComponent } from './staff/staff-nav/staff-nav.component';
import { StaffHeaderComponent } from './staff/staff-header/staff-header.component';
import { StaffContentComponent } from './staff/staff-content/staff-content.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModalComponent } from './admin/admin-modal/admin-modal.component';
import { AdminNewPostComponent } from './admin/admin-new-post/admin-new-post.component';
import { AdminPostListComponent } from './admin/admin-post-list/admin-post-list.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StaffWhatsNewComponent } from './staff/staff-whats-new/staff-whats-new.component';
import { StaffInsuranceServicesComponent } from './staff/staff-insurance-services/staff-insurance-services.component';
import { StaffActivitiesComponent } from './staff/staff-activities/staff-activities.component';
import { StaffPayrollComponent } from './staff/staff-payroll/staff-payroll.component';
import { StaffContactComponent } from './staff/staff-contact/staff-contact.component';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    StaffComponent,
    HomeComponent,
    StaffNavComponent,
    StaffHeaderComponent,
    StaffContentComponent,
    AdminComponent,
    AdminModalComponent,
    AdminNewPostComponent,
    AdminPostListComponent,
    AdminHeaderComponent,
    StaffWhatsNewComponent,
    StaffInsuranceServicesComponent,
    StaffActivitiesComponent,
    StaffPayrollComponent,
    StaffContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [ NgxSmartModalService,
                AuthService,
                BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

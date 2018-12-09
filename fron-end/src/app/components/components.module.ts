import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

/* Components */
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';


import {
  MatButtonModule, MatCardModule, MatDialogModule,MatRippleModule,  MatInputModule, MatTableModule, MatFormFieldModule,
  MatTooltipModule,  MatSelectModule ,MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MatButtonModule, MatCardModule, MatDialogModule,MatRippleModule,  MatInputModule, MatTableModule, MatFormFieldModule,
    MatTooltipModule,  MatSelectModule ,MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TeachersComponent,
    StudentsComponent,
    CoursesComponent,
    NotificationsComponent,
    IconsComponent,
    MapsComponent,
    LoginComponent,
    SignupComponent
  ],
  exports: [
    DashboardComponent,
    UserProfileComponent,
    TeachersComponent,
    StudentsComponent,
    CoursesComponent,
    IconsComponent,
    MapsComponent,
    LoginComponent
  ]
})
export class ComponentsModule { }

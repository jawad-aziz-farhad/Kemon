import { Routes } from '@angular/router';
/* Components */
import { TeachersComponent } from 'src/app/components/teachers/teachers.component';
import { StudentsComponent } from 'src/app/components/students/students.component';
import { CoursesComponent } from 'src/app/components/courses/courses.component';
import { NotificationsComponent } from 'src/app/components/notifications/notifications.component';
import { UserProfileComponent } from 'src/app/components/user-profile/user-profile.component';
import { IconsComponent } from 'src/app/components/icons/icons.component';
import { MapsComponent } from 'src/app/components/maps/maps.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

import { RoleGuardService as RoleGuard } from '../../shared/services'; 
import { LoginComponent } from 'src/app/components/login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',    component: DashboardComponent ,   canActivate: [ RoleGuard ] , data: { expectedRole: 'admin' }},
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'teachers',     component: TeachersComponent ,    canActivate: [ RoleGuard ] , data: { expectedRole: 'teacher' }},
    { path: 'students',     component: StudentsComponent },
    { path: 'courses',      component: LoginComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent }
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UploadStudentsComponent } from './upload-students/upload-students.component';
import { ExportStudentsComponent } from './export-students/export-students.component';
import { LoginComponent } from './login';
import { HomeComponent } from './home';
import {ViewAttendanceComponent} from './view-attendance/view-attendance.component';
import {ViewAttendanceDateComponent} from './view-attendance-date/view-attendance-date.component';
import { AuthGuard } from './_helpers';
import {RegisterComponent} from './register/register.component';
import {AttendanceComponent} from './attendance/attendance.component';
import {SessionComponent} from './session/session.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'uploadstudents', component: UploadStudentsComponent, canActivate: [AuthGuard]},
  { path: 'exportstudents', component: ExportStudentsComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'viewattendance', component: ViewAttendanceComponent },
  { path: 'viewattendancedate', component: ViewAttendanceDateComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'attendance', component: AttendanceComponent, canActivate: [AuthGuard]},
  { path: 'session', component: SessionComponent, canActivate: [AuthGuard]},

  { path: '**', redirectTo: 'home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
export const appRoutingModule = RouterModule.forRoot(routes);

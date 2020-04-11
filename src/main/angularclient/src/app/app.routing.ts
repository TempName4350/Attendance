import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UploadStudentsComponent } from './upload-students/upload-students.component';
import { ExportStudentsComponent } from './export-students/export-students.component';
import { LoginComponent } from './login';
import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import {RegisterComponent} from './register/register.component';
import {AttendanceComponent} from './attendance/attendance.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'uploadstudents', component: UploadStudentsComponent, canActivate: [AuthGuard]},
  { path: 'exportstudents', component: ExportStudentsComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path:  'attendance', component: AttendanceComponent},



  { path: '**', redirectTo: 'home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
export const appRoutingModule = RouterModule.forRoot(routes);

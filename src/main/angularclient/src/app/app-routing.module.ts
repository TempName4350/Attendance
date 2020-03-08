import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UploadStudentsComponent } from './upload-students/upload-students.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'uploadstudents', component: UploadStudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UploadStudentsComponent } from './upload-students/upload-students.component';
import { ExportStudentsComponent } from './export-students/export-students.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'uploadstudents', component: UploadStudentsComponent},
  { path: 'exportstudents', component: ExportStudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

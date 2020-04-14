import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { StudentServiceService } from './service/student-service.service';
import { TeacherServiceService } from './service/teacher-service.service';
import { AttendanceServiceService } from './service/attendance-service.service';
import { DateAttendServiceService } from './service/dateAttend-service.service';
import { UploadStudentsComponent } from './upload-students/upload-students.component';
import { ExportStudentsComponent } from './export-students/export-students.component';
import { LoginComponent } from './login';
import {ErrorInterceptor, fakeBackendProvider, JwtInterceptor} from './_helpers';
import {HomeComponent} from './home';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';
import { ViewAttendanceDateComponent } from './view-attendance-date/view-attendance-date.component';




@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UploadStudentsComponent,
    ExportStudentsComponent,
    LoginComponent,
    HomeComponent,
    ViewAttendanceComponent,
    ViewAttendanceDateComponent

  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AttendanceServiceService,
    DateAttendServiceService,
    TeacherServiceService,
    StudentServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    fakeBackendProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }

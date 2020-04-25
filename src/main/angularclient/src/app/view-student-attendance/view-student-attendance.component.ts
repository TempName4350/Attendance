import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Attendance } from '../model/attendance';
import { AttendanceServiceService } from '../service/attendance-service.service';
import { DateAttend } from '../model/dateAttend';
import { DateAttendServiceService } from '../service/dateAttend-service.service';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {AuthenticationService} from '../_services';

@Component({
  selector: 'app-view-student-attendance',
  templateUrl: './view-student-attendance.component.html',
  styleUrls: ['./view-student-attendance.component.css']
})
export class ViewStudentAttendanceComponent implements OnInit {
  pantherID: number;
  dateList: string[];
  datesAbsent: DateAttend[];
  dateID: number;
  successMessage = false;
  currentUser: any;



  constructor(private route: ActivatedRoute,
              private attendanceService: AttendanceServiceService,
              private dateAttendService: DateAttendServiceService,
              private router: Router,
              private http: HttpClient,
              private authenticationService: AuthenticationService


  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);


  }

  ngOnInit(): void {
    this.dateID = this.route.snapshot.params.dateID;
    this.pantherID = this.route.snapshot.params.pantherID;
    if (this.route.snapshot.params.successMessage !== undefined && this.route.snapshot.params.uploadSuccess === 'true') {
      this.successMessage = true;
    }

    const headers = new HttpHeaders();
    const params = new HttpParams().set('pantherID', this.pantherID.toString());

    // from panther ID, get all attendance records
    this.http.get<DateAttend[]>('/viewstudentattendance', {headers, params}).subscribe(
      data => {
        this.datesAbsent = data;
      },
    );
    // then go through and find the dates - return a list of dates
  }

  confirm(): void {
    this.router.navigate(['/session', {dateID: this.dateID}]);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }


}

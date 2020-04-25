import { Component, OnInit } from '@angular/core';
import { Attendance } from '../model/attendance';
import { AttendanceServiceService } from '../service/attendance-service.service';
import { DateAttend } from '../model/dateAttend';
import { DateAttendServiceService } from '../service/dateAttend-service.service';
import {Router} from '@angular/router';
import { Observable } from  'rxjs';
import {ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {AuthenticationService} from "../_services";

@Component({
  selector: 'app-view-attendance-date',
  templateUrl: './view-attendance-date.component.html',
  styleUrls: ['./view-attendance-date.component.css']
})
export class ViewAttendanceDateComponent implements OnInit {
  attendances: Attendance[];
  dateString: String;
  attendanceDateID: Number;
  hey: {};
  currentUser: any;

  constructor(private http: HttpClient,
              private attendanceService: AttendanceServiceService,
              private dateAttendService: DateAttendServiceService,
              private router: Router,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService

  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit(): void {
    const attendances = this.getPartners().then(data => {
      return data;
    }).then (data => {
      this.hey = data;
    });
    this.attendanceDateID = this.route.snapshot.params.attendanceDateID;
    this.dateString = this.route.snapshot.params.dateString;
  }

  getPartners() {
    return new Promise(resolve => {
      this.attendanceService.findAll().subscribe(data => {
        // get all dates
        this.attendances = data;
        resolve(this.attendances);
      });
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Attendance } from '../model/attendance';
import { AttendanceServiceService } from '../service/attendance-service.service';
import { DateAttend } from '../model/dateAttend';
import { DateAttendServiceService } from '../service/dateAttend-service.service';
import {Router} from "@angular/router"
import { Observable } from  "rxjs";
import {ActivatedRoute} from "@angular/router"
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {
  dates: DateAttend[];
  constructor(private http: HttpClient, private attendanceService: AttendanceServiceService,  private dateAttendService: DateAttendServiceService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.route);
  
    this.dateAttendService.findAll().subscribe(data => {
      // get all dates
      this.dates = data;
    });
  }
}

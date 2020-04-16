import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Attendance } from '../model/attendance';
import {ActivatedRoute} from "@angular/router"
import { AttendanceServiceService } from '../service/attendance-service.service';

@Component({ templateUrl: 'session.component.html' })
export class SessionComponent implements OnInit {

  SigninForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  PantherID: number;
  attendance: Attendance[];
  dateID: number;
  failureMessage: boolean = false;



  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private attendanceService: AttendanceServiceService,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {

  }

  check() {
    const userApproval = window.confirm ('Are you sure you want to cancel session?');
    if ( !userApproval ) {
      alert('Action is cancelled. \nYou are not going there.');
      return false;
    } else {
      this.http.post('/addabsences', this.dateID.toString()).subscribe(data => {
        this.router.navigate(['/home']);
      })
    }
  }

  ngOnInit() {
    this.SigninForm = this.formBuilder.group({
      PantherID: new FormControl(),
    });
    this.dateID = this.route.snapshot.params.dateID;

  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.SigninForm.invalid) {
      return;
    }
    
    this.PantherID = this.SigninForm.get('PantherID').value;
    this.attendanceService.findAll().subscribe(data => {
      // get all dates
      this.attendance = data;
      let maxAttendID = 0;

      this.attendance.forEach(element => {
          if (element.attendID > maxAttendID) {
              maxAttendID = element.attendID;
          }
      });
      // declare new Attendance record - 
      let newAttendance = new Attendance();
      newAttendance.pantherID = this.PantherID;
      newAttendance.dateID = this.dateID;
      console.log(this.dateID);
      console.log(newAttendance.dateID);
      newAttendance.attendID = maxAttendID + 1;

      this.attendanceService.save(newAttendance).subscribe(data => {
        console.log(newAttendance)
        this.router.navigate(['/viewstudentattendance', {pantherID: this.PantherID, dateID: this.dateID, successMessage: "true"}]);
      },
      err => {
        this.router.navigate(['/session', {dateID: this.dateID, failureMessage: 'true'}]);
      });
  });

  }
}


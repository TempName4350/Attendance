import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { StudentServiceService } from '../service/student-service.service';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';
import { Attendance } from '../model/attendance';
import {ActivatedRoute} from '@angular/router';
import { AttendanceServiceService } from '../service/attendance-service.service';


const userinfo = JSON.parse(localStorage.getItem('users')) || [];

@Component({ templateUrl: 'session.component.html',
              styleUrls: ['./session.component.css']})
export class SessionComponent implements OnInit {

  SigninForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  PantherID: number = null;
  attendance: Attendance[];
  dateID: number;
  failureMessage = false;



  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private attendanceService: AttendanceServiceService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private studentService: StudentServiceService,
  ) {

  }

  check() {
    const inputpassword = prompt('Please enter your password to continue');
    const passMAIN = userinfo.find(x => x.password === inputpassword);
    if (!inputpassword) {
      alert('Returning to session check-in.');
      return false;
    } else if (!passMAIN) { // if no input password then return message, if not right password return message
      alert('Password is Incorrect');
      return false;
    } else {
      this.http.post('/addabsences', this.dateID.toString()).subscribe(data => {
        this.router.navigate(['/home']);
      });
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
    let validPantherID = false;

    // stop here if form is invalid
    if (this.SigninForm.invalid) {
      return;
    }

    this.PantherID = this.SigninForm.get('PantherID').value;
    this.studentService.findAll().subscribe(data => {
      const students = data;
      students.forEach(element => {
        if (element.pantherID == this.PantherID) {
          validPantherID = true;
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
            const newAttendance = new Attendance();
            newAttendance.pantherID = this.PantherID;
            newAttendance.dateID = this.dateID;
            newAttendance.attendID = maxAttendID + 1;

            this.attendanceService.save(newAttendance).subscribe(data => {
              this.router.navigate(['/viewstudentattendance', {pantherID: this.PantherID, dateID: this.dateID, successMessage: 'true'}]);
            },
            (err: Error) => {
              this.router.navigate(['/session', {dateID: this.dateID, failureMessage: 'true'}]);
            });
          });
        }
      });
      if (!validPantherID) {
        this.failureMessage = true;
        this.router.navigate(['/session', {dateID: this.dateID, failureMessage: 'true'}]);
      }
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { DateAttend} from '../model/dateAttend';
import { DateAttendServiceService } from '../service/dateAttend-service.service';
import {Router} from "@angular/router"
import { DatePipe } from '@angular/common'
import {ActivatedRoute} from "@angular/router"
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';

@Component({ templateUrl: 'attendance.component.html' })
export class AttendanceComponent implements OnInit {
    dateAttend: DateAttend[];
    dateIDs: number[];
    currentDate: string;

    constructor(public datepipe: DatePipe, private http: HttpClient, private dateAttendService: DateAttendServiceService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
      let todaysDate = new Date();
      this.currentDate = this.datepipe.transform(todaysDate, 'yyyy-MM-dd');
    }

    startSession(): void {
        this.dateAttendService.findAll().subscribe(data => {
            // get all dates
            this.dateAttend = data;
            let maxDateID = 0;
    
            this.dateAttend.forEach(element => {
                if (element.dateID > maxDateID) {
                    maxDateID = element.dateID;
                }
            });
            // declare new dateAttend record - 
            let newDateAttendPresent = new DateAttend();
            newDateAttendPresent.dateID = maxDateID + 1;
            newDateAttendPresent.attended = "yes";
            newDateAttendPresent.date = this.currentDate;
    
            let newDateAttendAbsent = new DateAttend();
            newDateAttendAbsent.dateID = newDateAttendPresent.dateID + 1;
            newDateAttendAbsent.attended = "no";
            newDateAttendAbsent.date = this.currentDate;
    
            this.dateAttendService.save(newDateAttendPresent).subscribe(data => {
            });
            this.dateAttendService.save(newDateAttendAbsent).subscribe(data => {
            });
            this.router.navigate(['/session', {dateID: newDateAttendPresent.dateID}]);
        });
    }   
}

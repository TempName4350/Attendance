import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Attendance } from '../model/attendance';
import { Observable } from 'rxjs';
 
@Injectable()
export class AttendanceServiceService {
 
  private datesUrl: string;
 
  constructor(private http: HttpClient) {
    this.datesUrl = 'http://localhost:8080/viewattendancedate';
  }
 
  public findAll(): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(this.datesUrl);
  }
 
  public save(attendance: Attendance) {
    return this.http.post<Attendance>(this.datesUrl, attendance);
  }
}

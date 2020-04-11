import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Student } from '../model/student';
import { Observable } from 'rxjs';
 
@Injectable()
export class StudentServiceService {
 
  private studentsUserUrl: string;
  private studentsExportUrl: string;
 
  constructor(private http: HttpClient) {
    this.studentsUserUrl = 'http://localhost:8080/users';
    this.studentsExportUrl = 'http://localhost:8080/exportstudents';
  }
 
  public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUserUrl);
  }
 
  public save(student: Student) {
    return this.http.post<Student>(this.studentsUserUrl, student);
  }
}

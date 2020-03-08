import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Student } from '../model/student';
import { Observable } from 'rxjs';
 
@Injectable()
export class StudentServiceService {
 
  private studentsUrl: string;
 
  constructor(private http: HttpClient) {
    this.studentsUrl = 'http://localhost:8080/users';
  }
 
  public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }
 
  public save(student: Student) {
    return this.http.post<Student>(this.studentsUrl, student);
  }
}

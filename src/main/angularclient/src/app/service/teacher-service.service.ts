import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Teacher } from '../model/teacher';
import { Observable } from 'rxjs';

@Injectable()
export class TeacherServiceService {

  private teacherLogin: string;

  constructor(private http: HttpClient) {
    this.teacherLogin = 'http://localhost:8080/login';
  }

  public findAll(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.teacherLogin);
  }

  public save(teacher: Teacher) {
    return this.http.post<Teacher>(this.teacherLogin, teacher);
  }
}

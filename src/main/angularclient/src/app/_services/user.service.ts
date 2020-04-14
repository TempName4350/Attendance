import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {config} from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    // @ts-ignore

    return this.http.get<any[]>(`${config.apiUrl}/users`);
  }

  register(user) {
    // @ts-ignore

    return this.http.post(`${config.apiUrl}/users/register`, user);
  }

  delete(id) {
    // @ts-ignore
    return this.http.delete(`${config.apiUrl}/users/${id}`);
  }


}

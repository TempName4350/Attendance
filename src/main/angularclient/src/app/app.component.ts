import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title: string;
  currentUser: any;

  constructor(
    public router: Router,
    private authenticationService: AuthenticationService

  ) {

    this.title = 'Paperless Attendance';
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}


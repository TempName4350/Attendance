import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../_services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-export-students',
  templateUrl: './export-students.component.html',
  styleUrls: ['./export-students.component.css']
})
export class ExportStudentsComponent implements OnInit {

  currentUser: any;
  private router: Router;


  constructor(
    private authenticationService: AuthenticationService

  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);


  }

  ngOnInit(): void {
    window.open('http://localhost:8080/exportstudents');
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}

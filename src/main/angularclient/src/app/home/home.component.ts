  import {Component, OnInit} from '@angular/core';
  import {Router} from '@angular/router';
  import {AuthenticationService} from '../_services';


  @Component({ templateUrl: 'home.component.html' })
  export class HomeComponent {
    currentUser: any;


    constructor(
      public router: Router,
      private authenticationService: AuthenticationService


    ) {

      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    }

    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
    }
  }


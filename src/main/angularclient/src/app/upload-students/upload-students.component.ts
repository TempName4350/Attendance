import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentServiceService } from '../service/student-service.service';
import { Student } from '../model/student';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {Router} from "@angular/router"
import {AuthenticationService} from "../_services";

@Component({
  selector: 'app-upload-students',
  templateUrl: './upload-students.component.html',
  styleUrls: ['./upload-students.component.css']
})
export class UploadStudentsComponent implements OnInit {
  fileToUpload: File = null;
  currentUser: any;


  constructor(private http: HttpClient,
              private router: Router,
              private authenticationService: AuthenticationService
  ) {

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  submitFile(): void {
    let formData = new FormData();
    formData.append('file', this.fileToUpload); // Append file to formdata
    this.http.post('/uploadstudents', formData, {
      headers: new HttpHeaders(),
      responseType: 'text'
    }).subscribe(
      (response) => {
        this.router.navigate(['/users', {uploadSuccess: 'true' }]);
      },
      (error) => {
        this.router.navigate(['/users',  {uploadFailure: 'true' }]);
      }
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

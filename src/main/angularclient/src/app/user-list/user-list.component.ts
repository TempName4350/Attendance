import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentServiceService } from '../service/student-service.service';
import {Router} from "@angular/router"
import {ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
  students: Student[];
  showSuccessMsg: boolean = false;
  showErrorMsg: boolean = false;
 
  constructor(private studentService: StudentServiceService, private router: Router, private route: ActivatedRoute) {
  }
 
  ngOnInit() {
    if(this.route.snapshot.params.uploadSuccess !== undefined && this.route.snapshot.params.uploadSuccess === 'true') {
      this.showSuccessMsg = true;
      this.showErrorMsg = false;
    }

    if(this.route.snapshot.params.uploadFailure !== undefined && this.route.snapshot.params.uploadFailure === 'true') {
      this.showErrorMsg = true;
      this.showSuccessMsg = false;
    }
  
    this.studentService.findAll().subscribe(data => {
      this.students = data;
    });
  }
}

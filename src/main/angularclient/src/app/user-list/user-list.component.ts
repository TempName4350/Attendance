import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentServiceService } from '../service/student-service.service';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
  students: Student[];
 
  constructor(private studentService: StudentServiceService) {
  }
 
  ngOnInit() {
    this.studentService.findAll().subscribe(data => {
      this.students = data;
    });
  }
}

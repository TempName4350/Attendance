import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-students',
  templateUrl: './export-students.component.html',
  styleUrls: ['./export-students.component.css']
})
export class ExportStudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.open('http://localhost:8080/exportstudents')
  }

}

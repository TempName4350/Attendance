import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentServiceService } from '../service/student-service.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-upload-students',
  templateUrl: './upload-students.component.html',
  styleUrls: ['./upload-students.component.css']
})
export class UploadStudentsComponent implements OnInit {
  fileToUpload: File = null;
  constructor() { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
}

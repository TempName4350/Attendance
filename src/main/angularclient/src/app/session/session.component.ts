import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({ templateUrl: 'session.component.html' })
export class SessionComponent implements OnInit {

  SigninForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  PantherID: number;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  check() {
    const userApproval = window.confirm ('Are you sure you want to cancel session?');
    if ( !userApproval ) {
      alert('Action is cancelled. \nYou are not going there.');
      return false;
    } else {


      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.SigninForm = this.formBuilder.group({
      PantherID: ['', [Validators.required, Validators.minLength(9)], Validators.maxLength(9)]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.SigninForm.invalid) {
      return;


    }


        }
  }


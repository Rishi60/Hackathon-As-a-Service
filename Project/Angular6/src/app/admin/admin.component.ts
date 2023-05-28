import { Component, OnInit } from '@angular/core';

import { AdminService } from '../shared/admin.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
 
})
export class AdminComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;


  constructor(private adminService: AdminService) { }

  ngOnInit() {
   
  }
  onSubmit(form: NgForm) {
   
    this.adminService.postadmin(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }
  resetForm(form: NgForm) {
    this.adminService.selectedAdmin = {
      department: '',
      statusofapplication: '',
      
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}

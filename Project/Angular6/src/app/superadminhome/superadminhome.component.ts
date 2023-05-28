import { Component, OnInit } from '@angular/core';
import { SuperadminService } from '../shared/superadmin.service';

import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-superadminhome',
  templateUrl: './superadminhome.component.html',
  styleUrls: ['./superadminhome.component.css']
})
export class SuperadminhomeComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;

  
   
  constructor(private superadminService: SuperadminService, private router: Router) { }
  

  ngOnInit() {
    
  }
  onSubmit(form: NgForm) {
    console.log("inside on submit");
    this.superadminService.postinvite(form.value).subscribe(
      res => {
        //this.showSucessMessage = true;
        //setTimeout(() => this.showSucessMessage = false, 4000);
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        
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

}

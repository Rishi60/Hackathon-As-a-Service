import { Component, OnInit } from '@angular/core';
import { ProblemcommitteeService } from '../shared/problemcommittee.service'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-problemcommittee',
  templateUrl: './problemcommittee.component.html',
  styleUrls: ['./problemcommittee.component.css']
})
export class ProblemcommitteeComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;


  constructor(private problemcommitteeService: ProblemcommitteeService ) { }
               
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log("inside on submit");
    this.problemcommitteeService.postUser(form.value).subscribe(
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
    this.problemcommitteeService.selectedProblem = {
      problemstatement: '',
      department: '',
    
     
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }


}

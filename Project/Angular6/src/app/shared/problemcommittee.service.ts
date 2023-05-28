import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Problemcommittee } from './problemcommittee.model';


@Injectable({
  providedIn: 'root'
})
export class ProblemcommitteeService {
  selectedProblem: Problemcommittee = {
    problemstatement: '',
    department: '',
    
  };


  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }
  postUser(problemcommittee: Problemcommittee){
    return this.http.post(environment.apiBaseUrl+'/problemcommittee',problemcommittee,this.noAuthHeader);
  }

}

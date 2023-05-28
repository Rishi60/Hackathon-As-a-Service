import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './superadmin.model';


@Injectable({
  providedIn: 'root'
})
export class SuperadminService {
  selectedsuperadmin: User = {
    fullName: '',
    email: '',
    password: '',
    address: '',
    phoneno: '',
    type: '',
  };
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };


  constructor(private http: HttpClient) { }
  
  postinvite(user: User){
    return this.http.post(environment.apiBaseUrl+'/invite',user);
  }
}

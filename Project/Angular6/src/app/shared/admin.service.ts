import { Injectable } from '@angular/core';
import {Admin} from './admin.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  selectedAdmin: Admin = {
    department:'',
    statusofapplication:''

  };

  constructor(private http: HttpClient) { }
  postadmin(admin: Admin){
    return this.http.post(environment.apiBaseUrl+'/adminregister',admin);
  }
}

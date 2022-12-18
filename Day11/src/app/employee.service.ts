import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable()
export class EmployeeService {

  private url : string= "/assets/AppData/employee.json"

  constructor(private http : HttpClient) 
  { }

//Giving the Request  using GET and takingg a response through Observable
  getEmployees () : Observable <IEmployee[]>
  {
    return this.http.get <IEmployee[]> (this.url);
  }
}

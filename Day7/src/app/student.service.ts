import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getStudents(): any []
  {
    return[{ID: 1001, Name:"sakshi", Gender:"female",Dob:"1-2-2005", City:"Nashik",Fee:50000 },
    {ID: 1002, Name:"pooja", Gender:"female",Dob:"10-6-2000", City:"Nashik",Fee:55000 },
    {ID: 1003, Name:"aanand", Gender:"male",Dob:"19-4-2007", City:"Nashik",Fee:57000 }];
  }

  constructor() { 

  }
}

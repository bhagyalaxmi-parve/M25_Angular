import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit{
  employees : any =[] ;
  constructor(private empser : EmployeeService)
  {

  }



  ngOnInit()
    {
      this.empser.getEmployees().subscribe(data => this.employees = data)
    }
  
}

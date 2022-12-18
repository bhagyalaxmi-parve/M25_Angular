import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-experience',
  templateUrl: './emp-experience.component.html',
  styleUrls: ['./emp-experience.component.css']
})
export class EmpExperienceComponent implements OnInit{
  employees : any =[] ;
  constructor(private empser : EmployeeService)
  {

  }

  ngOnInit()
    {
      this.empser.getEmployees().subscribe(data => this.employees = data)
    }

}

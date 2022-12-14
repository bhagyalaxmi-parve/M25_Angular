import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [StudentService]
})
export class AppComponent {
  title = 'Day7';
  students: any[] | undefined  ; 
  
  //dependency using class constructor

  constructor(private studentService: StudentService){
   

  }
  ngOnInit()
  {
    this.students=this.studentService.getStudents();
  }
}


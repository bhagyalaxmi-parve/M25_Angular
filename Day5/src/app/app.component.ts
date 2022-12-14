import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day5';
  students: any[]=[
    {
      ID:1001,Name:"sakshi",Gender:"female",Dob:"05-05-2005", City:"mumbai",Fee:50000
    },
    {
      ID:1002,Name:"aanand",Gender:"male",Dob:"19-04-2007",City:"mumbai",Fee:50000
    },
    {
      ID:1003,Name:"pooja",Gender:"female",Dob:"10-06-2000",City:"pune",Fee:50000
    }
  ];
  today : number = Date.now();
}

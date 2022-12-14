import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
//interpolation is denoted by{{}}
//property binding
  template:`<div>
                
              <h1><span [innerHTML] = 'title'></span></h1>
            <h2>{{"First name = "+FirstName + "  "+"Last name =" +LastName}}</h2>
            <h3>110+20+47 = {{110+20+47}}</h3>
          <app-company-component></app-company-component>
            </div>`,



  //external template
 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day3_Data_Binding';
  FirstName:string= "Bhagyalaxmi";
  LastName:string= "Parve";
}

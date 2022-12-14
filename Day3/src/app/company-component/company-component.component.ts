import { Component } from '@angular/core';

@Component({
  selector: 'app-company-component',

  //inline tempolate
  /*template:`<div>
             <h3>Class Binding</h3>
              <button class="colorclass">Clck on me</button>
              
            </div>
            
           `,*/

  //External template
  templateUrl: './company-component.component.html',
  styleUrls: ['./company-component.component.css']
})
export class CompanyComponentComponent {

  //attribute binding
  company:string="Capgimini";
  contact:string="sakshi";
  country:string="India";

  company1:string="Accenture";
  contact1:string="pooja ";
  country1:string="Paris";
  
  button:string="Click me";
  FullName:string="Bhagyalaxmi Kailas Parve";
  firstname:string="Bhagyalaxmi";
 twoway:string="C2TC Program";
  onClick():void
  {
    console.log("Congratulation , button working successfully");
  }


  print():void
  {
    console.log("hey..........");
  }
  itemUrl="data:image/png;base64,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";


}
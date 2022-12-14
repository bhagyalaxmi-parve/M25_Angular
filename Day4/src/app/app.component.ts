import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 /* template:`<div>
              <h2 *ngIf="isValid  ; else elseBlock"> Welcome to java full stack </h2>
              <ng-template #elseBlock>
              <h2>M25></h2>
              </ng-template>
              </div>

              <br>
             
              <div [ngSwitch]="color">
              <p *ngSwitchCase="'pink'"> Pink Color</p>
              <p *ngSwitchCase="'blue'"> Blue Color</p>
              <p *ngSwitchDefault="''"> No Value</p>
              <div>`,*/

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day4';
  students: any[]=[
    {
      ID:1001,Name:"sakshi",City:"mumbai"
    },
    {
      ID:1002,Name:"aanand",City:"mumbai"
    },
    {
      ID:1003,Name:"pooja",City:"pune"
    }
  ];
  isValid:boolean=true;
   color ='blue';
}

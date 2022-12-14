import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div>
            <h2>{{title1}}</h2>
            <app-student></app-student>
            </div>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day-2';

  title1="Student Details";
 
}

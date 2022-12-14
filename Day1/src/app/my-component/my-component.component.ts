import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
   //Internal template
  /* template: `<H3>{{name1}}</H3>
   <body>
     Hey sirii, How to know more about Angular & TypeScript
   </body>   
`,*/
 templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {

  name1="WELCOME TO SOFT_SKILL PLATFORM";

}

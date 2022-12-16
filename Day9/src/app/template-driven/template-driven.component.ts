import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
// onSubmit(_t6: NgForm) {
// throw new Error('Method not implemented.');
// }


onSubmit(form: NgForm){
  //console.log("Registered Successfully...");
  console.log(form.value);
}

}

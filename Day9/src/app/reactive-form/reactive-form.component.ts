import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms"
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  sampleForm! : FormGroup;
  ngOnInit()
  {
    this.sampleForm = new  FormGroup({'email': new FormControl('' , [Validators.required, Validators.email]),
   'psw': new FormControl('' , [Validators.required]),
  'psw-repeat': new FormControl('' , [Validators.required])})

  }


  onSubmit()
  {
    //console.log("Successfully Registered......");
    console.log(this.sampleForm.value);
  }
}

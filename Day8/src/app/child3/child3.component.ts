import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {


  message: string | undefined;
  constructor(private cs:CustomerService){

  }
  ngOnInit()
  {
    this.message=this.cs.display("TNSIF");
  }


}

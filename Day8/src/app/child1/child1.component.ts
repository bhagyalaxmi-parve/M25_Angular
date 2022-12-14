import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
   //providers:[CustomerService]
})
export class Child1Component {
  message: string | undefined;
  constructor(private cs:CustomerService){

  }
  ngOnInit()
  {
    this.message=this.cs.display("TECHNOSERVE");
 
  }

}

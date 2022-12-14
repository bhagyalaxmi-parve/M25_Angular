import { Injectable } from '@angular/core';



//when we use 'root' it  will create one object
@Injectable()
export class CustomerService {
  
 private  static count=0;



 //child2 is dependent on customerService
  constructor() {
    CustomerService.count=CustomerService.count+3;
    console.log(CustomerService.count);
   }
   display(name : string){

    return"Welcome to "+name;
   }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatedCustomerService {
  private  static count=0;



 //child2 is dependent on customerService
  constructor() {
    UpdatedCustomerService.count=UpdatedCustomerService.count+3;
    console.log(UpdatedCustomerService.count);
   }
   display(name : string){

    return"UPDATED "+name;
   }

  //  print(){

  //   return"NOT UPDATED";
  //  }

 
}

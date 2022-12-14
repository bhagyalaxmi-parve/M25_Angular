import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(Name : string, Gender:string): string {

    if(Gender=="male")
    {
      return "Mr. "+Name;
    }
    else{
      return "Miss. "+Name;
    }
  }

}

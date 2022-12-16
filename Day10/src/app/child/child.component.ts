import { Component, DoCheck, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges , DoCheck, OnDestroy{





  @Input() userName='';




  ngDoCheck(): void {
    console.log('ngDoCheck From Child Component');
  }




ngOnInit()
  {
    console.log("NgOInit From Child Component");
  }



  //1.1st LifeCycleHooks
 ngOnChanges(changes: SimpleChanges): void {
   //throw new Error('Method not implemented.');
   console.log("ngOnchanges Triggered", changes);


   if(!changes['userName'].isFirstChange())
   {
    if(changes['userName'].currentValue! = 'Parve')
    {
      this.userName = "Welcome " +   this.userName;
    }
    else{
      this.userName = changes['userName'].previousValue;
    }
   }
 }



 ngOnDestroy(): void {
  console.log('Child component is destroyed!');
}


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {



  userName="Bhagyalaxmi"

  isChildDestroyed = false;
  
  destroy() {
    this.isChildDestroyed = true;
 }

  ngOnInit()
  {
    console.log("NgOInit From Parent Component");
  }
  updateUser()
{
  this.userName="Parve";

}
}

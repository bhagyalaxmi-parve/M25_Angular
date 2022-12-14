import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day6';
  constructor(private router: Router){}
    display()
    {
      this.router.navigate(['/home'])
    }

    display1()
    {
      this.router.navigate(['/news'])
    }
  

    display2()
    {
      this.router.navigate(['/notification'])
    }
    display3()
    {
      this.router.navigate(['/contact-us'])
    }
}

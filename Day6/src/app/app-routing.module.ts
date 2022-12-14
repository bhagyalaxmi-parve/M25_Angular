import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NotificationComponent } from './notification/notification.component';

//Routing
const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'news',component:NewsComponent
  },
  {
    path:'notification',component:NotificationComponent
  },
  {
    path:'contact-us',component:ContactUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

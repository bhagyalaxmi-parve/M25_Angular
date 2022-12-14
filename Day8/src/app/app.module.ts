import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { CustomerService } from './customer.service';
import { UpdatedCustomerService } from './updated-customer.service';
import { Child3Component } from './child3/child3.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //non - tree shakable
  providers: [{provide: CustomerService,useClass: UpdatedCustomerService}],
 // {provide: UpdatedCustomerService,useClass: CustomerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }

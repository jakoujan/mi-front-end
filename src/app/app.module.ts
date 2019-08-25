import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersistenceModule } from 'angular-persistence';
import { CreditRequestComponent } from './components/credit-request/credit-request.component';

//services



@NgModule({
  declarations: [
    AppComponent,
    CreditRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersistenceModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

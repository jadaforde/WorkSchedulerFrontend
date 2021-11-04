import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginscreenComponent } from './components/loginscreen/loginscreen.component';
import { ViewScheduleComponent } from './components/view-schedule/view-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginscreenComponent,
    ViewScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

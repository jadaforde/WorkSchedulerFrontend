import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginscreenComponent } from './components/loginscreen/loginscreen.component';
import { DashBoardScreenComponent } from './components/dash-board-screen/dash-board-screen.component';
import { ViewScheduleComponent } from './components/view-schedule/view-schedule.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TimeOffComponent } from './components/time-off/time-off.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginscreenComponent,
    DashBoardScreenComponent,
    ViewScheduleComponent,
    LogoutComponent,
    TimeOffComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, ComponentRef } from '@angular/core';
import { LoginResponse } from './models/LoginResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'WorkSchedulerFrontend';
// <<<<<<< HEAD
//   myimage:string = "assets/LOGO1.png";
// =======

  /**
   * Which screen is to be displayed (name of the component)
   * You can use this with *ngIf in the app-component html to only show one main screen component
   * (see loginscreen.component.ts for an example, angular passes the AppComponent into the constructor)
   */
  currentScreen:string = "app-loginscreen";
  authToken:string = null;
  user:LoginResponse = null;

  public logout():void
  {
    this.authToken=null;
    this.user=null;
    this.currentScreen="app-loginscreen";
  }

  public isUserManager():boolean
  {
    return this.user?.isManager;
  }


  viewDashboard(): void{
    this.currentScreen = 'app-dash-board-screen';
  }
  viewSchedule(): void{
    this.currentScreen = 'app-view-schedule';
  }

  viewAvaiability(): void{
    this.currentScreen = 'app-set-availability';
  }
  viewTimeOff(): void{
    this.currentScreen = 'app-time-off';
  }
  approveTimeOff(): void{
    this.currentScreen = 'app-ap-time-off';
  }
  createSchedule()
  {
    this.currentScreen = 'app-create-schedule';
  }

  // logout():void
  // {
  //   this.logout();
  // }
}

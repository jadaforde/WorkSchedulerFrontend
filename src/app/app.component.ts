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
>>>>>>> 20f045cd27a3563ff71496ff680e99cdc37dc500
}

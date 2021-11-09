import { Component, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WorkSchedulerFrontend';

  /**
   * Which screen is to be displayed (name of the component)
   * You can use this with *ngIf in the app-component html to only show one main screen component
   * (see loginscreen.component.ts for an example, angular passes the AppComponent into the constructor)
   */
  currentScreen:string = "app-loginscreen";
  

}

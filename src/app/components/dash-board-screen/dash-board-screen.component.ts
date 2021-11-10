import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-dash-board-screen',
  templateUrl: './dash-board-screen.component.html',
  styleUrls: ['./dash-board-screen.component.css']
})
export class DashBoardScreenComponent implements OnInit {

  constructor(private app:AppComponent,) { }

  ngOnInit(): void {
  }
  viewSchedule(): void{
    this.app.currentScreen = 'app-view-schedule';
  }

}

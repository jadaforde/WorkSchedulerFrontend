import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Employee } from 'src/app/models/Employee';
import { ScheduledShift } from 'src/app/models/ScheduledShift';
import { shiftType } from 'src/app/models/ShiftType';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent implements OnInit {

  constructor(
    private app:AppComponent,
    private httpClient:HttpClient
  ) { }

  ngOnInit(): void {
    this.setDateRange(2);
    //temp, will have server call so needs to move eventually
    this.processShifts(this.getShifts());
  }

  //TODO: implement a real request and get shifts as an array
  //Any shifts in this fakeShifts array are displayed in the date set by the date property
  getShifts():Array<ScheduledShift>
  {
    const headers:HttpHeaders = new HttpHeaders({
      'Authorization': this.app.authToken
    });
    const pendingResponse = this.httpClient.get<ScheduledShift[]>("http://localhost:8080/schedule/", {headers:headers});
    
    pendingResponse.subscribe(
      (response)=>{this.unProcessedShifts = response;}
    );
    
    return this.unProcessedShifts;
  }

  fakeShifts:Array<ScheduledShift> = [
    {"scheduledShiftID":1,"shiftType":new shiftType(0,"Cashier",Date.now(),Date.now()+(8*3600000)),"employee":new Employee(0,"Donut Dude", "ddude123","hashme",0),"date":Date.now()},
    {"scheduledShiftID":1,"shiftType":new shiftType(0,"Doughnut Maker",Date.now(),Date.now()+(8*3600000)),"employee":new Employee(0,"Donut Dude2", "ddude123","hashme",0),"date":Date.now()}

  ];

  unProcessedShifts:Array<ScheduledShift>;
  processedShifts:ScheduledShift[][][] = [];

  dateRange:Date[][] = [];

  setDateRange(iterations:number)
  {
    for(let j=0;j<iterations;j++)
    {
      let curr = new Date();
      curr.setDate(curr.getDate() + j*7);
      let week = [];

      for (let i = 1; i <= 7; i++) {
        let first = curr.getDate() - curr.getDay() + i;
        let day = new Date(curr.setDate(first));
        week.push(day);
      }
      this.dateRange[j] = week;
    }
  }

  processShifts(rawShifts:Array<ScheduledShift>)
  {
    for(let i = 0; i < this.dateRange.length; i++)
    {
      let weekArr:ScheduledShift[][] = [];
      
      for(let j = 0; j<this.dateRange[i].length; j++)
      {
        let dayArr:ScheduledShift[] = [];

        rawShifts.forEach(shift => 
        {
          if(this.dateRange[i][j].getDate() == new Date(shift.date).getDate())
          {
            dayArr.push(shift);
          }
        });

        weekArr[j] = dayArr;
      }

      this.processedShifts[i] = weekArr;
    }
  }

  returnToDash()
  {
    this.app.currentScreen = 'app-dash-board-screen'
  }

}

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
    this.processShifts(this.getShifts());
  }

  async getShifts():Promise<ScheduledShift[]>
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

  async processShifts(awaitShifts:Promise<ScheduledShift[]>)
  {
    let rawShifts = await awaitShifts;
    if(rawShifts != null)
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
  }


  returnToDash()
  {
    this.app.currentScreen = 'app-dash-board-screen'
  }

}

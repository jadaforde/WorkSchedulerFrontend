import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Employee } from 'src/app/models/Employee';
import { ScheduledShift } from 'src/app/models/ScheduledShift';
import { shiftType } from 'src/app/models/ShiftType';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {

  constructor(
    private app:AppComponent,
    private httpClient:HttpClient
  ) { }

  ngOnInit(): void {
    this.setDateRange(2);
    this.getAvShifts();
    this.processShifts(this.getShifts());
  }


  unProcessedShifts:Array<ScheduledShift>;
  processedShifts:ScheduledShift[][][] = [];

  dateRange:Date[][] = [];

  avEmployees:Array<Employee>;
  avShiftTypes:Array<shiftType>;
  selectedEmp:number[][] = [[],[]];
  selectedShift:number[][] = [[],[]];


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

  
  async getShifts()
  {
    const headers:HttpHeaders = new HttpHeaders({
      'Authorization': this.app.authToken
    });
    const pendingResponse = this.httpClient.get<ScheduledShift[]>("http://localhost:8080/schedule", {headers:headers});

    const response = await pendingResponse.toPromise();
    this.unProcessedShifts = response;
    return response;
  }

  addShift(day:Date, index:number, week:number)
  {
    if(this.selectedShift != null && this.selectedEmp != null)
    {
      //generate ScheduledShift
      let shift = new ScheduledShift(null, new shiftType(this.selectedShift[week][index], null, null,null),new Employee(this.selectedEmp[week][index], null, null, null, null), day.valueOf());

      //Post to backend
      const headers:HttpHeaders = new HttpHeaders({
        'Authorization': this.app.authToken
      });
      const pendingResponse = this.httpClient.post<ScheduledShift[]>("http://localhost:8080/schedule/", shift, {headers:headers});
      
      pendingResponse.subscribe(
        (response)=>{console.log(response); this.processShifts(this.getShifts());}
      );
    }
  }

  getAvEmps(id:number)
  {
    const headers:HttpHeaders = new HttpHeaders({
      'Authorization': this.app.authToken
    });
    const pendingResponse = this.httpClient.get<Employee[]>("http://localhost:8080/employees/"+"?shiftType="+id, {headers:headers});
    
    pendingResponse.subscribe(
      (response)=>{this.avEmployees = response;}
    );

  }

  getAvShifts()
  {
    const headers:HttpHeaders = new HttpHeaders({
      'Authorization': this.app.authToken
    });
    const pendingResponse = this.httpClient.get<Array<shiftType>>("http://localhost:8080/shifttypes", {headers:headers});
    
    pendingResponse.subscribe(
      (response)=>{this.avShiftTypes = response;}
    );


  }

}

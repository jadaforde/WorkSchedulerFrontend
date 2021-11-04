import { Component, OnInit } from '@angular/core';
import { ScheduledShift } from 'src/app/models/ScheduledShift';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setDateRange(2);
    //temp, will have server call so needs to move eventually
    this.processShifts(this.fakeShifts);
  }

  fakeShifts:Array<ScheduledShift> = [
    {"id":1,"shiftType":{},"employee":{},"date":Date.now()}
  ];

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
    rawShifts.forEach((shift)=>{
      for(let i = 0; i < this.dateRange.length; i++)
      {
        let weekArr:ScheduledShift[][] = [];

        for(let j = 0; j<this.dateRange[i].length; j++)
        {
          let dayArr:ScheduledShift[] = [];

          if(this.dateRange[i][j].getDate() == new Date(shift.date).getDate())
          {
            dayArr.push(shift);
          }

          weekArr[j] = dayArr;
        }

        this.processedShifts[i] = weekArr;
      }
    });
  }

}

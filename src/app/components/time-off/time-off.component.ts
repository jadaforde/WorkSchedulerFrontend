import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TimeOffRequest } from 'src/app/models/TimeOffRequest';

@Component({
  selector: 'app-time-off',
  templateUrl: './time-off.component.html',
  styleUrls: ['./time-off.component.css']
})
export class TimeOffComponent implements OnInit {

  constructor(
    private app:AppComponent,
    private httpClient:HttpClient
    ) { }

  ngOnInit(): void {
    console.log(this.app.user.employee.employeeID);
    this.getMyRequests();
  }

  manager:boolean = this.app.isUserManager();
  myRequests:TimeOffRequest[];

  startTime:string;
  endTime:string;
  timesValid:boolean = true;

  getMyRequests()
  {
    const headers:HttpHeaders = new HttpHeaders({
      'Authorization': this.app.authToken
    });
    const pendingResponse = this.httpClient.get<TimeOffRequest[]>("http://localhost:8080/timeoff/"+this.app.user.employee.employeeID, {headers:headers});
    
    pendingResponse.subscribe(
      (response)=>{this.myRequests = response;}
    );
  }

  submitRequest()
  {
    this.validateTimes();
    let uniStart:number = Date.parse(this.startTime);
    let uniEnd:number = Date.parse(this.endTime);
    if(this.startTime != null && this.endTime != null)
    {
      let timeRequest:TimeOffRequest = new TimeOffRequest(0,this.app.user.employee,uniStart, uniEnd,null);

      const headers:HttpHeaders = new HttpHeaders({
        'Authorization': this.app.authToken
      });
      const pendingResponse = this.httpClient.post<TimeOffRequest[]>("http://localhost:8080/timeoff", timeRequest,{headers:headers});
      
      pendingResponse.subscribe(
        (response)=>{let nonsense=alert("Request Submitted!"); this.app.currentScreen = 'app-dash-board-screen'}
      );
    }
  }
  
  returnToDash()
  {
    this.app.currentScreen = 'app-dash-board-screen'
  }

  validateTimes()
  {
    this.timesValid = (this.startTime != null && this.endTime != null)?true:false;
  }
}

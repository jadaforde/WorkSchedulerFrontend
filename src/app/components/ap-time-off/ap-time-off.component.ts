import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { TimeOffRequest } from 'src/app/models/TimeOffRequest';

@Component({
  selector: 'app-ap-time-off',
  templateUrl: './ap-time-off.component.html',
  styleUrls: ['./ap-time-off.component.css']
})
export class ApTimeOffComponent implements OnInit {

  constructor(
    private app:AppComponent,
    private httpClient:HttpClient
    ) { }

  ngOnInit(): void {
    
    this.getPendingRequests();
  }

  manager:boolean = this.app.isUserManager();


  pendingRequests:TimeOffRequest[];

  
  getPendingRequests()
  {
    const headers:HttpHeaders = new HttpHeaders({
      'Authorization': this.app.authToken
    });
    console.log(this.app.authToken);
    const pendingResponse = this.httpClient.get<TimeOffRequest[]>("http://localhost:8080/timeoff", {headers:headers});
    
    pendingResponse.subscribe(
      (response)=>{this.pendingRequests = response;}
    );
  }

  approve(id:number)
  {
    const headers:HttpHeaders = new HttpHeaders({
      'Authorization': this.app.authToken
    });
    console.log(this.app.authToken);
    const pendingResponse = this.httpClient.get<TimeOffRequest>("http://localhost:8080/timeoff/approve/"+id+"?approved=true", {headers:headers});
    
    pendingResponse.subscribe(
      (response)=>{this.getPendingRequests(); console.log(response)}
    );
  }

  deny(id:number)
  {
    const headers:HttpHeaders = new HttpHeaders({
      'Authorization': this.app.authToken
    });
    console.log(this.app.authToken);
    const pendingResponse = this.httpClient.get<TimeOffRequest>("http://localhost:8080/timeoff/approve/"+id+"?approved=false", {headers:headers});
    
    pendingResponse.subscribe(
      (response)=>{this.getPendingRequests(); console.log(response)}
    );
  }

}

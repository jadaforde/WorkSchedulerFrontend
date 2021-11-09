import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from 'src/app/models/Employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  public username:string = "";
  public password:string = "";
  public showInvalidLoginPrompt=false;
  @ViewChild("usernameInput", {static: false}) usernameInput:ElementRef;
  
  constructor(
    private app:AppComponent,
    private httpClient:HttpClient
    )
  {
  }

  ngOnInit(): void {
  }

  login(): void
  {
    this.showInvalidLoginPrompt = false;
    // TODO make this a service?
    // take username and password, generate a header
    const headers:HttpHeaders = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.username + ":" + this.password)
    });
    
    // send login request
    const observableUser:Observable<Employee> = this.httpClient.get<Employee>("http://localhost:8080/login", {
      headers:headers
    });

    // if request comes back OK, save credentials to session storage and change screen
    observableUser.subscribe(
      (user)=>this.onLoginSuccess(user),
      ()=>this.onLoginError()
    );
  }

  private onLoginSuccess(user:Employee)
  {
    this.app.currentScreen='app-dash-board-screen';
  }

  private onLoginError()
  {
    this.showInvalidLoginPrompt=true;
    this.username="";
    this.password="";
    this.usernameInput.nativeElement.focus();
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from 'src/app/models/Employee';
import { LoginResponse } from 'src/app/models/LoginResponse';
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
    const authToken:string = 'Basic ' + btoa(this.username + ":" + this.password);
    const headers:HttpHeaders = new HttpHeaders({
      'Authorization': authToken
    });
    
    // send login request
    const pendingResponse:Observable<LoginResponse> = this.httpClient.get<LoginResponse>("http://localhost:8080/login", {
      headers:headers
    });

    // if request comes back OK, save credentials to session storage and change screen
    pendingResponse.subscribe(
      (response)=>this.onLoginSuccess(response, authToken),
      ()=>this.onLoginError()
    );
  }

  private onLoginSuccess(response:LoginResponse, authToken:string)
  {
    this.app.currentScreen='app-dash-board-screen';
    this.app.authToken = authToken;
    console.log(typeof(response));
    console.log(response);
    this.app.user = response;
  }

  private onLoginError()
  {
    this.showInvalidLoginPrompt=true;
    this.username="";
    this.password="";
    this.usernameInput.nativeElement.focus();
  }
}

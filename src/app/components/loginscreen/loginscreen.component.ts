import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  username:string = "";
  password:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  login(): void
  {
    console.log(this.username);
    console.log(this.password);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardScreenComponent } from './components/dash-board-screen/dash-board-screen.component';
import { LoginscreenComponent } from './components/loginscreen/loginscreen.component';
import { ViewScheduleComponent } from './components/view-schedule/view-schedule.component';

const routes: Routes = [
  {path: 'loginscreen', component:LoginscreenComponent},
  {path: 'viewschedule', component:ViewScheduleComponent},
  {path: 'dashboard', component:DashBoardScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

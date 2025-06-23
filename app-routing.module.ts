import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { DashboardComponent } from './dashboard/dashboard.component'; 
//import { UserDashboardComponent } from './userdashboad/userdashboad.component';

const routes: Routes = [
  //{ path: 'userdashboard', component: UserDashboardComponent },
  //{ path: 'dashboard', component: DashboardComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
